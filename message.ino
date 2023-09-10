#include <ArduinoJson.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <Adafruit_NeoPixel.h>
#include <SPI.h>
#include <MFRC522.h>


const char* ssid = "LAPTOP2SSETE30";
const char* password = "2z4838JK";

#define LED_PIN    15
#define LED_COUNT 7

#define SS_PIN 5
#define RST_PIN 0

const int numDoors = 7;
const int analogPins[] = {32, 33, 34, 35, 24, 25, 26};
const int threshold = 700; // Adjust this threshold based on your sensors

const char* serverUrl = "http://10.197.24.191:5000/receive_data";  // Replace with your server's URL

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class
MFRC522::MIFARE_Key key; 

byte nuidPICC[4];


bool doorStates[numDoors];

void setup() {

  SPI.begin();
  rfid.PCD_Init(); 

  Serial.begin(115200);
  for (int i = 0; i < numDoors; i++) {
    pinMode(analogPins[i], INPUT);
  }
  strip.begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
  strip.show();            // Turn OFF all pixels ASAP
  strip.setBrightness(50);

    for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }

      WiFi.mode(WIFI_STA); //Optional
    WiFi.begin(ssid, password);
    //Serial.println("\nConnecting");

    while(WiFi.status() != WL_CONNECTED){
        Serial.print(".");
        delay(100);
    }

        Serial.println("\nConnected to the WiFi network");
    Serial.print("Local ESP32 IP: ");
    Serial.println(WiFi.localIP());
}

void loop() {
    DynamicJsonDocument jsonDoc(4096);
      JsonArray sensorArray = jsonDoc.to<JsonArray>();


    

  // Read analog values and update door states

  strip.setPixelColor(0, strip.Color(0, 0, 0)); 
strip.show();

  for (int i = 0; i < numDoors; i++) {
    int analogValue = analogRead(analogPins[i]);
    int curr_door_state = analogValue > threshold;
    doorStates[i] = (curr_door_state);

    if (curr_door_state) {
      strip.setPixelColor(i, strip.Color(0, 0, 255)); // Set pixel 'c' to value 'color'
    } else {
      strip.setPixelColor(i, strip.Color(255, 0, 0)); // Set pixel 'c' to value 'color'
    }

  }
  strip.show();


  for (int i = 0; i < numDoors; i++) {
    JsonObject sensorReading = sensorArray.createNestedObject();

    sensorReading["sensor_name"] = "door_" + String(i + 1); // Sensor name
    sensorReading["open_state"] = doorStates[i]; // Sensor state

  }

  // Serialize the JSON array (packet)
  String jsonString;
  serializeJson(jsonDoc, jsonString);

  // Print the entire JSON packet
  Serial.println(jsonString);

  HTTPClient http;
  
  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");
  
  int httpCode = http.POST(jsonString);

    if (httpCode > 0) {
        Serial.printf("HTTP Code: %d\n", httpCode);
        String response = http.getString();
        Serial.println(response);
    } else {
        Serial.printf("HTTP Error: %s\n", http.errorToString(httpCode).c_str());
    }


  // Serial.print(F("PICC type: "));
  // MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
  // Serial.println(rfid.PICC_GetTypeName(piccType));

  // if (rfid.uid.uidByte[0] != nuidPICC[0] || 
  //   rfid.uid.uidByte[1] != nuidPICC[1] || 
  //   rfid.uid.uidByte[2] != nuidPICC[2] || 
  //   rfid.uid.uidByte[3] != nuidPICC[3] ) {
  //   Serial.println(F("A new card has been detected."));

  //   // Store NUID into nuidPICC array
  //   for (byte i = 0; i < 4; i++) {
  //     nuidPICC[i] = rfid.uid.uidByte[i];
  //   }
   
  //   Serial.println(F("The NUID tag is:"));
  //   Serial.print(F("In hex: "));
  //   printHex(rfid.uid.uidByte, rfid.uid.size);
  //   Serial.println();
  //   Serial.print(F("In dec: "));
  //   printDec(rfid.uid.uidByte, rfid.uid.size);
  //   Serial.println();
  // }
  // else Serial.println(F("Card read previously."));

  //   rfid.PICC_HaltA();

  // // Stop encryption on PCD
  // rfid.PCD_StopCrypto1();
  readRFID();


  delay(1000);
}

void readRFID() {
  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.
  if (!rfid.PICC_IsNewCardPresent())
    return;

  // Verify if the NUID has been read
  if (!rfid.PICC_ReadCardSerial())
    return;

  Serial.print(F("PICC type: "));
  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
  Serial.println(rfid.PICC_GetTypeName(piccType));

  // Check if the PICC is of Classic MIFARE type
  if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&
      piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
      piccType != MFRC522::PICC_TYPE_MIFARE_4K) {
    Serial.println(F("Your tag is not of type MIFARE Classic."));
    return;
  }

  if (rfid.uid.uidByte[0] != nuidPICC[0] ||
      rfid.uid.uidByte[1] != nuidPICC[1] ||
      rfid.uid.uidByte[2] != nuidPICC[2] ||
      rfid.uid.uidByte[3] != nuidPICC[3]) {
    Serial.println(F("A new card has been detected."));

    // Store NUID into nuidPICC array
    for (byte i = 0; i < 4; i++) {
      nuidPICC[i] = rfid.uid.uidByte[i];
    }

    Serial.println(F("The NUID tag is:"));
    Serial.print(F("In hex: "));
    printHex(rfid.uid.uidByte, rfid.uid.size);
    Serial.println();
    Serial.print(F("In dec: "));
    printDec(rfid.uid.uidByte, rfid.uid.size);
    Serial.println();
  } else
    Serial.println(F("Card read previously."));

  

  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
}


void printHex(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
}


void printDec(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], DEC);
  }
}