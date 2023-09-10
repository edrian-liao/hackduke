# DoseDocker
___A Smart IoT Pill Box with Web-based monitoring system___

DoseDocker is a light-up IoT pillbox, leveraging smart lights to alert a patient when they need to take their medicine, and monitoring to ensure that the right dose is prepared for them.

### How we started
At the start of this hackathon, our team wanted to create a project that combined hardware and software. An IoT device with a built-in monitoring seemed a natural choice. We later listened to a talk about patient safety and were astounded that 250,000 people die a year from preventable errors. After diving deeper into such incidents with Medication‐related incidents at 19 hospitals: A retrospective register study using incident reports, we decided to create a pillbox that not only reminds patients to take their pills and but also addresses the lack of accountability in administering medicines, specifically via scanned signatures.

### What it does
- The pillbox tracks when it is opened and closed, informing nurses (without alarming them) if and when a patient has taken their medication for the day.
- An RFID/NFC scanner takes a signature from a caregiver who prepares the medicines.

### Data pipeline
Technicality-wise, the system's pipeline goes like this:
1. Light-to-voltage model
2. Conversion of voltage to number
3. Set threshold to set BOX_ON or BOX_OFF states
4. State sent as signals to Flask over local WiFi
5. Flask to MongoDB
6. MongoDB to Node.js
7. Node.js controls output elements on the Web-based App
   
### What's next for DoseDocker
We hope that the data collected through DoseDocker can be used to optimize the administration of medicines, possibly by making visible the times that caregivers are most accurate in preparing them.

