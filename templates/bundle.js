(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "name": "Edrian Liao",
        "timestamps": ["2023-09-09 12:11:13","2023-09-10 16:30:32","2023-09-11 14:23:13"]
    },
    {
        "name": "Annabelle Chu",
        "timestamps": ["2023-09-09 12:08:07","2023-09-10 17:30:30","2023-09-11 15:01:37"]
    },
    {
        "name": "Jessica Tiu",
        "timestamps": ["2023-09-09 12:00:14","2023-09-10 16:28:21","2023-09-11 13:44:15"]
    }
]
},{}],2:[function(require,module,exports){
module.exports=[
    {
        "name": "Edrian Liao",
        "status": [1,1,1,1,1,1,1]
    },
    {
        "name": "Annabelle Chu",
        "status": [0,0,1,1,1,1,1]
    },
    {
        "name": "Jessica Tiu",
        "status": [0,0,0,0,0,1,1]
    }
]
},{}],3:[function(require,module,exports){
module.exports=[
    {
        "name": "Edrian Liao",
        "prescriptions":["Warfarin", "Insulin"],
        "nurses":["Nurse 1", "Nurse 7"]
    },
    {
        "name": "Annabelle Chu",
        "prescriptions":["Ibuprofen", "Amoxicillin"],
        "nurses":["Nurse 4", "Nurse 6"]
    },
    {
        "name": "Jessica Tiu",
        "prescriptions":["Penicillin", "Tylenol"],
        "nurses":["Nurse 2", "Nurse 3"]
    }
]
},{}],4:[function(require,module,exports){
const jsonData = require('./sample1.json');
const jsonData2 = require('./sample2.json');
const jsonData3 = require('./sample3.json');

// Get references to the input field and search button
const searchName = document.getElementById('filter1');
const searchDate = document.getElementById('filter2');
const searchButton = document.getElementById('searchButton');



// Function to handle the search
function handleSearch() {
    const table = document.getElementById('actions-log');
    const table3 = document.getElementById('admin-log');
    const cards = document.getElementsByClassName('card');
    console.log(cards);
    // console.log("reached");

    // delete rows after refresh
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    while (table3.rows.length > 1) {
        table3.deleteRow(1);
    }
    // refresh colors
    for (let i = 0; i < cards.length; i++) {
        // console.log(person2.status);
        cards[i].style.backgroundColor = '#fff';
    }
    

    // console.log(searchName);
    const index = jsonData.findIndex(obj => obj.name === searchName.value);
    const index2 = jsonData2.findIndex(obj => obj.name === searchName.value);
    const index3 = jsonData3.findIndex(obj => obj.name === searchName.value);
    // console.log(index);
    const person = jsonData[index];
    const person2 = jsonData2[index2];
    const person3 = jsonData3[index3];
    // console.log(person);
    const length = person.timestamps.length;
    for (let i = 0; i < length; i++) {
        const newRow = table.insertRow();
        const name = person.name;
        const timestamp = person.timestamps[i];
        // console.log(timestamp);
        const [datePart, timePart] = timestamp.split(' ');
        
        const cell0 = newRow.insertCell(0);
        const cell1 = newRow.insertCell(1);
        const cell2 = newRow.insertCell(2);
    
        cell0.textContent = name;
        cell1.textContent = datePart;
        cell2.textContent = timePart;
    }

    const newRow3 = table3.insertRow();
    const name3 = person3.name;
    console.log(name3);
    const pres = person3.prescriptions;
    const nur = person3.nurses;

    const cell03 = newRow3.insertCell(0);
    const cell13 = newRow3.insertCell(1);
    const cell23 = newRow3.insertCell(2);

    console.log(pres);

    cell03.textContent = name3;
    cell13.textContent = pres;
    cell23.textContent = nur;

    console.log(index2);
    for (let i = 0; i < cards.length; i++) {
        // console.log(person2.status);
        if (person2.status[i] == 1) {
            // console.log(cards[i]);

            switch (i) {
                case 0:
                    cards[i].style.backgroundColor = '#575959';
                    break;
                case 1:
                    cards[i].style.backgroundColor = '#ff7526';
                    break;
                case 2:
                    cards[i].style.backgroundColor = 'orange';
                    break;
                case 3:
                    cards[i].style.backgroundColor = '#eee152';
                    break;
                case 4:
                    cards[i].style.backgroundColor = '#32fd1d';
                    break;
                case 5:
                    cards[i].style.backgroundColor = '#4155A0';
                    break;
                case 6:
                    cards[i].style.backgroundColor = '#575959';
                    break;
                default:
                    cards[i].style.backgroundColor = 'white';
            }
        }
    }

}

// Add a click event listener to the search button
searchButton.addEventListener('click', handleSearch);

// const {MongoClient} = require('mongodb');

// async function main() {
// 	// we'll add code here soon
//     const uri = "mongodb://localhost:27017/hackduke";
//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// var MongoClient = require('mongodb').MongoClient;

// const username = encodeURIComponent('annabelle');
// const password = encodeURIComponent('lwy9Ao3mpoDAVEeN');
// const uri = `mongodb+srv://${username}:${password}@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority`;

// // Get references to the input field and search button
// const searchName = document.getElementById('filter1');
// const searchDate = document.getElementById('filter2');
// const searchButton = document.getElementById('searchButton');

// async function connectToMongoDB() {
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         console.log('Connected to MongoDB!');

//         const db = client.db('pillbox'); // Replace with your database name
//         const collection = db.collection('box_status'); // Replace with your collection name

//         const cursor = collection.find();
//         // console.log(cursor);    

//         await listDatabases(client);

//         // Now, you can query the collection to access data
//         const documents = await collection.find({}).toArray();
//         console.log('Retrieved documents:', documents);

//         const table = document.getElementById('actions-log');

//         console.log(table.rows.length);
//         while (table.rows.length > 1) {
//             table.deleteRow(1);
//         }
//         // console.log(searchName);
//         const index = documents.findIndex(obj => obj.name === searchName.value);
//         console.log(index);
//         const person = documents[index];
//         // console.log(person);
//         const length = person.timestamps.length;
//         for (let i = 0; i < length; i++) {
//             const newRow = table.insertRow();
//             const name = person.name;
//             const timestamp = person.timestamps[i];
//             // console.log(timestamp);
//             const [datePart, timePart] = timestamp.split(' ');
            
//             const cell0 = newRow.insertCell(0);
//             const cell1 = newRow.insertCell(1);
//             const cell2 = newRow.insertCell(2);
        
//             cell0.textContent = name;
//             cell1.textContent = datePart;
//             cell2.textContent = timePart;
//         }
//     } catch (e) {
//         console.error('Error:', e);
//     } finally {
//         await client.close();
//     }

// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// // Add a click event listener to the search button
// searchButton.addEventListener('click', connectToMongoDB);

// var { MongoClient } = require('mongodb');

// var username = encodeURIComponent('annabelle');
// var password = encodeURIComponent('lwy9Ao3mpoDAVEeN');
// var uri = 'mongodb+srv://' + username + ':' + password + '@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority';

// function connectToMongoDB() {
//     var client = new MongoClient(uri);

//     client.connect()
//         .then(function () {
//             console.log('Connected to MongoDB!');

//             var db = client.db('pillbox'); // Replace with your database name
//             var collection = db.collection('box_status'); // Replace with your collection name

//             // Query the collection to access data
//             return collection.find({}).toArray();
//         })
//         .then(function (documents) {
//             console.log('Retrieved documents:', documents);

//             var table = document.getElementById('actions-log');

//             // Clear existing rows
//             while (table.rows.length > 1) {
//                 table.deleteRow(1);
//             }

//             documents.forEach(function (person) {
//                 var length = person.timestamps.length;

//                 for (var i = 0; i < length; i++) {
//                     var newRow = table.insertRow();
//                     var name = person.name;
//                     var timestamp = person.timestamps[i];
//                     var datePartTimePart = timestamp.split(' ');

//                     var cell0 = newRow.insertCell(0);
//                     var cell1 = newRow.insertCell(1);
//                     var cell2 = newRow.insertCell(2);

//                     cell0.textContent = name;
//                     cell1.textContent = datePartTimePart[0];
//                     cell2.textContent = datePartTimePart[1];
//                 }
//             });
//         })
//         .catch(function (error) {
//             console.error('Error:', error);
//         })
//         .finally(function () {
//             client.close();
//         });
// }

// // Call the connectToMongoDB function
// connectToMongoDB();


// Add a click event listener to the search button
// searchButton.addEventListener('click', connectToMongoDB);




},{"./sample1.json":1,"./sample2.json":2,"./sample3.json":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzYW1wbGUxLmpzb24iLCJzYW1wbGUyLmpzb24iLCJzYW1wbGUzLmpzb24iLCJzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJFZHJpYW4gTGlhb1wiLFxyXG4gICAgICAgIFwidGltZXN0YW1wc1wiOiBbXCIyMDIzLTA5LTA5IDEyOjExOjEzXCIsXCIyMDIzLTA5LTEwIDE2OjMwOjMyXCIsXCIyMDIzLTA5LTExIDE0OjIzOjEzXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFubmFiZWxsZSBDaHVcIixcclxuICAgICAgICBcInRpbWVzdGFtcHNcIjogW1wiMjAyMy0wOS0wOSAxMjowODowN1wiLFwiMjAyMy0wOS0xMCAxNzozMDozMFwiLFwiMjAyMy0wOS0xMSAxNTowMTozN1wiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJKZXNzaWNhIFRpdVwiLFxyXG4gICAgICAgIFwidGltZXN0YW1wc1wiOiBbXCIyMDIzLTA5LTA5IDEyOjAwOjE0XCIsXCIyMDIzLTA5LTEwIDE2OjI4OjIxXCIsXCIyMDIzLTA5LTExIDEzOjQ0OjE1XCJdXHJcbiAgICB9XHJcbl0iLCJtb2R1bGUuZXhwb3J0cz1bXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRWRyaWFuIExpYW9cIixcclxuICAgICAgICBcInN0YXR1c1wiOiBbMSwxLDEsMSwxLDEsMV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQW5uYWJlbGxlIENodVwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6IFswLDAsMSwxLDEsMSwxXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJKZXNzaWNhIFRpdVwiLFxyXG4gICAgICAgIFwic3RhdHVzXCI6IFswLDAsMCwwLDAsMSwxXVxyXG4gICAgfVxyXG5dIiwibW9kdWxlLmV4cG9ydHM9W1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkVkcmlhbiBMaWFvXCIsXHJcbiAgICAgICAgXCJwcmVzY3JpcHRpb25zXCI6W1wiV2FyZmFyaW5cIiwgXCJJbnN1bGluXCJdLFxyXG4gICAgICAgIFwibnVyc2VzXCI6W1wiTnVyc2UgMVwiLCBcIk51cnNlIDdcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQW5uYWJlbGxlIENodVwiLFxyXG4gICAgICAgIFwicHJlc2NyaXB0aW9uc1wiOltcIklidXByb2ZlblwiLCBcIkFtb3hpY2lsbGluXCJdLFxyXG4gICAgICAgIFwibnVyc2VzXCI6W1wiTnVyc2UgNFwiLCBcIk51cnNlIDZcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSmVzc2ljYSBUaXVcIixcclxuICAgICAgICBcInByZXNjcmlwdGlvbnNcIjpbXCJQZW5pY2lsbGluXCIsIFwiVHlsZW5vbFwiXSxcclxuICAgICAgICBcIm51cnNlc1wiOltcIk51cnNlIDJcIiwgXCJOdXJzZSAzXCJdXHJcbiAgICB9XHJcbl0iLCJjb25zdCBqc29uRGF0YSA9IHJlcXVpcmUoJy4vc2FtcGxlMS5qc29uJyk7XHJcbmNvbnN0IGpzb25EYXRhMiA9IHJlcXVpcmUoJy4vc2FtcGxlMi5qc29uJyk7XHJcbmNvbnN0IGpzb25EYXRhMyA9IHJlcXVpcmUoJy4vc2FtcGxlMy5qc29uJyk7XHJcblxyXG4vLyBHZXQgcmVmZXJlbmNlcyB0byB0aGUgaW5wdXQgZmllbGQgYW5kIHNlYXJjaCBidXR0b25cclxuY29uc3Qgc2VhcmNoTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXIxJyk7XHJcbmNvbnN0IHNlYXJjaERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyMicpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJyk7XHJcblxyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgc2VhcmNoXHJcbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbnMtbG9nJyk7XHJcbiAgICBjb25zdCB0YWJsZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRtaW4tbG9nJyk7XHJcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKTtcclxuICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVhY2hlZFwiKTtcclxuXHJcbiAgICAvLyBkZWxldGUgcm93cyBhZnRlciByZWZyZXNoXHJcbiAgICB3aGlsZSAodGFibGUucm93cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGFibGUuZGVsZXRlUm93KDEpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHRhYmxlMy5yb3dzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0YWJsZTMuZGVsZXRlUm93KDEpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVmcmVzaCBjb2xvcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwZXJzb24yLnN0YXR1cyk7XHJcbiAgICAgICAgY2FyZHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoTmFtZSk7XHJcbiAgICBjb25zdCBpbmRleCA9IGpzb25EYXRhLmZpbmRJbmRleChvYmogPT4gb2JqLm5hbWUgPT09IHNlYXJjaE5hbWUudmFsdWUpO1xyXG4gICAgY29uc3QgaW5kZXgyID0ganNvbkRhdGEyLmZpbmRJbmRleChvYmogPT4gb2JqLm5hbWUgPT09IHNlYXJjaE5hbWUudmFsdWUpO1xyXG4gICAgY29uc3QgaW5kZXgzID0ganNvbkRhdGEzLmZpbmRJbmRleChvYmogPT4gb2JqLm5hbWUgPT09IHNlYXJjaE5hbWUudmFsdWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgY29uc3QgcGVyc29uID0ganNvbkRhdGFbaW5kZXhdO1xyXG4gICAgY29uc3QgcGVyc29uMiA9IGpzb25EYXRhMltpbmRleDJdO1xyXG4gICAgY29uc3QgcGVyc29uMyA9IGpzb25EYXRhM1tpbmRleDNdO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGVyc29uKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBlcnNvbi50aW1lc3RhbXBzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXdSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gcGVyc29uLm5hbWU7XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyc29uLnRpbWVzdGFtcHNbaV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGltZXN0YW1wKTtcclxuICAgICAgICBjb25zdCBbZGF0ZVBhcnQsIHRpbWVQYXJ0XSA9IHRpbWVzdGFtcC5zcGxpdCgnICcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNlbGwwID0gbmV3Um93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgY29uc3QgY2VsbDEgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcclxuICAgICAgICBjb25zdCBjZWxsMiA9IG5ld1Jvdy5pbnNlcnRDZWxsKDIpO1xyXG4gICAgXHJcbiAgICAgICAgY2VsbDAudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gZGF0ZVBhcnQ7XHJcbiAgICAgICAgY2VsbDIudGV4dENvbnRlbnQgPSB0aW1lUGFydDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdSb3czID0gdGFibGUzLmluc2VydFJvdygpO1xyXG4gICAgY29uc3QgbmFtZTMgPSBwZXJzb24zLm5hbWU7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lMyk7XHJcbiAgICBjb25zdCBwcmVzID0gcGVyc29uMy5wcmVzY3JpcHRpb25zO1xyXG4gICAgY29uc3QgbnVyID0gcGVyc29uMy5udXJzZXM7XHJcblxyXG4gICAgY29uc3QgY2VsbDAzID0gbmV3Um93My5pbnNlcnRDZWxsKDApO1xyXG4gICAgY29uc3QgY2VsbDEzID0gbmV3Um93My5pbnNlcnRDZWxsKDEpO1xyXG4gICAgY29uc3QgY2VsbDIzID0gbmV3Um93My5pbnNlcnRDZWxsKDIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByZXMpO1xyXG5cclxuICAgIGNlbGwwMy50ZXh0Q29udGVudCA9IG5hbWUzO1xyXG4gICAgY2VsbDEzLnRleHRDb250ZW50ID0gcHJlcztcclxuICAgIGNlbGwyMy50ZXh0Q29udGVudCA9IG51cjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbmRleDIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbjIuc3RhdHVzKTtcclxuICAgICAgICBpZiAocGVyc29uMi5zdGF0dXNbaV0gPT0gMSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkc1tpXSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzU3NTk1OSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjc1MjYnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlMTUyJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzMyZmQxZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MTU1QTAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTc1OTU5JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzZWFyY2ggYnV0dG9uXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaCk7XHJcblxyXG4vLyBjb25zdCB7TW9uZ29DbGllbnR9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuLy8gXHQvLyB3ZSdsbCBhZGQgY29kZSBoZXJlIHNvb25cclxuLy8gICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9oYWNrZHVrZVwiO1xyXG4vLyAgICAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcbiBcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgLy8gQ29ubmVjdCB0byB0aGUgTW9uZ29EQiBjbHVzdGVyXHJcbi8vICAgICAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuIFxyXG4vLyAgICAgICAgIC8vIE1ha2UgdGhlIGFwcHJvcHJpYXRlIERCIGNhbGxzXHJcbi8vICAgICAgICAgYXdhaXQgIGxpc3REYXRhYmFzZXMoY2xpZW50KTtcclxuIFxyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbi8vICAgICB9IGZpbmFsbHkge1xyXG4vLyAgICAgICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBtYWluKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblxyXG4vLyB2YXIgTW9uZ29DbGllbnQgPSByZXF1aXJlKCdtb25nb2RiJykuTW9uZ29DbGllbnQ7XHJcblxyXG4vLyBjb25zdCB1c2VybmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudCgnYW5uYWJlbGxlJyk7XHJcbi8vIGNvbnN0IHBhc3N3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KCdsd3k5QW8zbXBvREFWRWVOJyk7XHJcbi8vIGNvbnN0IHVyaSA9IGBtb25nb2RiK3NydjovLyR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9QGhhY2tkdWtlLmhhc25pYmsubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XHJcblxyXG4vLyAvLyBHZXQgcmVmZXJlbmNlcyB0byB0aGUgaW5wdXQgZmllbGQgYW5kIHNlYXJjaCBidXR0b25cclxuLy8gY29uc3Qgc2VhcmNoTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXIxJyk7XHJcbi8vIGNvbnN0IHNlYXJjaERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyMicpO1xyXG4vLyBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJyk7XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9Nb25nb0RCKCkge1xyXG4vLyAgICAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcblxyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQiEnKTtcclxuXHJcbi8vICAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ3BpbGxib3gnKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgZGF0YWJhc2UgbmFtZVxyXG4vLyAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdib3hfc3RhdHVzJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbGxlY3Rpb24gbmFtZVxyXG5cclxuLy8gICAgICAgICBjb25zdCBjdXJzb3IgPSBjb2xsZWN0aW9uLmZpbmQoKTtcclxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJzb3IpOyAgICBcclxuXHJcbi8vICAgICAgICAgYXdhaXQgbGlzdERhdGFiYXNlcyhjbGllbnQpO1xyXG5cclxuLy8gICAgICAgICAvLyBOb3csIHlvdSBjYW4gcXVlcnkgdGhlIGNvbGxlY3Rpb24gdG8gYWNjZXNzIGRhdGFcclxuLy8gICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkIGRvY3VtZW50czonLCBkb2N1bWVudHMpO1xyXG5cclxuLy8gICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25zLWxvZycpO1xyXG5cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0YWJsZS5yb3dzLmxlbmd0aCk7XHJcbi8vICAgICAgICAgd2hpbGUgKHRhYmxlLnJvd3MubGVuZ3RoID4gMSkge1xyXG4vLyAgICAgICAgICAgICB0YWJsZS5kZWxldGVSb3coMSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaE5hbWUpO1xyXG4vLyAgICAgICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnRzLmZpbmRJbmRleChvYmogPT4gb2JqLm5hbWUgPT09IHNlYXJjaE5hbWUudmFsdWUpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuLy8gICAgICAgICBjb25zdCBwZXJzb24gPSBkb2N1bWVudHNbaW5kZXhdO1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbik7XHJcbi8vICAgICAgICAgY29uc3QgbGVuZ3RoID0gcGVyc29uLnRpbWVzdGFtcHMubGVuZ3RoO1xyXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwZXJzb24ubmFtZTtcclxuLy8gICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyc29uLnRpbWVzdGFtcHNbaV07XHJcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWVzdGFtcCk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IFtkYXRlUGFydCwgdGltZVBhcnRdID0gdGltZXN0YW1wLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zdCBjZWxsMCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDApO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBjZWxsMSA9IG5ld1Jvdy5pbnNlcnRDZWxsKDEpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBjZWxsMiA9IG5ld1Jvdy5pbnNlcnRDZWxsKDIpO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjZWxsMC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbi8vICAgICAgICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gZGF0ZVBhcnQ7XHJcbi8vICAgICAgICAgICAgIGNlbGwyLnRleHRDb250ZW50ID0gdGltZVBhcnQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGUpO1xyXG4vLyAgICAgfSBmaW5hbGx5IHtcclxuLy8gICAgICAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGxpc3REYXRhYmFzZXMoY2xpZW50KXtcclxuLy8gICAgIGRhdGFiYXNlc0xpc3QgPSBhd2FpdCBjbGllbnQuZGIoKS5hZG1pbigpLmxpc3REYXRhYmFzZXMoKTtcclxuIFxyXG4vLyAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZXM6XCIpO1xyXG4vLyAgICAgZGF0YWJhc2VzTGlzdC5kYXRhYmFzZXMuZm9yRWFjaChkYiA9PiBjb25zb2xlLmxvZyhgIC0gJHtkYi5uYW1lfWApKTtcclxuLy8gfTtcclxuXHJcbi8vIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzZWFyY2ggYnV0dG9uXHJcbi8vIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbm5lY3RUb01vbmdvREIpO1xyXG5cclxuLy8gdmFyIHsgTW9uZ29DbGllbnQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcclxuXHJcbi8vIHZhciB1c2VybmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudCgnYW5uYWJlbGxlJyk7XHJcbi8vIHZhciBwYXNzd29yZCA9IGVuY29kZVVSSUNvbXBvbmVudCgnbHd5OUFvM21wb0RBVkVlTicpO1xyXG4vLyB2YXIgdXJpID0gJ21vbmdvZGIrc3J2Oi8vJyArIHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQgKyAnQGhhY2tkdWtlLmhhc25pYmsubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcblxyXG4vLyBmdW5jdGlvbiBjb25uZWN0VG9Nb25nb0RCKCkge1xyXG4vLyAgICAgdmFyIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG5cclxuLy8gICAgIGNsaWVudC5jb25uZWN0KClcclxuLy8gICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQiEnKTtcclxuXHJcbi8vICAgICAgICAgICAgIHZhciBkYiA9IGNsaWVudC5kYigncGlsbGJveCcpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBkYXRhYmFzZSBuYW1lXHJcbi8vICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignYm94X3N0YXR1cycpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb2xsZWN0aW9uIG5hbWVcclxuXHJcbi8vICAgICAgICAgICAgIC8vIFF1ZXJ5IHRoZSBjb2xsZWN0aW9uIHRvIGFjY2VzcyBkYXRhXHJcbi8vICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudHMpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCBkb2N1bWVudHM6JywgZG9jdW1lbnRzKTtcclxuXHJcbi8vICAgICAgICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25zLWxvZycpO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gQ2xlYXIgZXhpc3Rpbmcgcm93c1xyXG4vLyAgICAgICAgICAgICB3aGlsZSAodGFibGUucm93cy5sZW5ndGggPiAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0YWJsZS5kZWxldGVSb3coMSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwZXJzb24pIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBwZXJzb24udGltZXN0YW1wcy5sZW5ndGg7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHBlcnNvbi5uYW1lO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBwZXJzb24udGltZXN0YW1wc1tpXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZVBhcnRUaW1lUGFydCA9IHRpbWVzdGFtcC5zcGxpdCgnICcpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbDAgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgwKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbDEgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbDIgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgyKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2VsbDAudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gZGF0ZVBhcnRUaW1lUGFydFswXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjZWxsMi50ZXh0Q29udGVudCA9IGRhdGVQYXJ0VGltZVBhcnRbMV07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBDYWxsIHRoZSBjb25uZWN0VG9Nb25nb0RCIGZ1bmN0aW9uXHJcbi8vIGNvbm5lY3RUb01vbmdvREIoKTtcclxuXHJcblxyXG4vLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgc2VhcmNoIGJ1dHRvblxyXG4vLyBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25uZWN0VG9Nb25nb0RCKTtcclxuXHJcblxyXG5cclxuIl19
