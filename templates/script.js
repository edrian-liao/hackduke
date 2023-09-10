// const jsonData = require('./sample1.json');

// // Get references to the input field and search button
// const searchName = document.getElementById('filter1');
// const searchDate = document.getElementById('filter2');
// const searchButton = document.getElementById('searchButton');



// // Function to handle the search
// function handleSearch() {
//     const table = document.getElementById('actions-log');
//     console.log(table.rows.length);
//     while (table.rows.length > 1) {
//         table.deleteRow(1);
//     }
//     // console.log(searchName);
//     const index = jsonData.findIndex(obj => obj.name === searchName.value);
//     // console.log(index);
//     const person = jsonData[index];
//     // console.log(person);
//     const length = person.timestamps.length;
//     for (let i = 0; i < length; i++) {
//         const newRow = table.insertRow();
//         const name = person.name;
//         const timestamp = person.timestamps[i];
//         // console.log(timestamp);
//         const [datePart, timePart] = timestamp.split(' ');
        
//         const cell0 = newRow.insertCell(0);
//         const cell1 = newRow.insertCell(1);
//         const cell2 = newRow.insertCell(2);
    
//         cell0.textContent = name;
//         cell1.textContent = datePart;
//         cell2.textContent = timePart;
//     }
// }

// // Add a click event listener to the search button
// searchButton.addEventListener('click', handleSearch);

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

var { MongoClient } = require('mongodb');

var username = encodeURIComponent('annabelle');
var password = encodeURIComponent('lwy9Ao3mpoDAVEeN');
var uri = 'mongodb+srv://' + username + ':' + password + '@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority';

// Get references to the input field and search button
// var searchName = document.getElementById('filter1');
// var searchDate = document.getElementById('filter2');
// var searchButton = document.getElementById('searchButton');

function connectToMongoDB() {
    var client = new MongoClient(uri);

    client.connect().then(function () {
        console.log('Connected to MongoDB!');

        var db = client.db('pillbox'); // Replace with your database name
        var collection = db.collection('box_status'); // Replace with your collection name

        var cursor = collection.find();

        listDatabases(client);

        // Now, you can query the collection to access data
        collection.find({}).toArray().then(function (documents) {
            console.log('Retrieved documents:', documents);

            var table = document.getElementById('actions-log');

            console.log(table.rows.length);
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            var index = documents.findIndex(function (obj) {
                return obj.name === searchName.value;
            });

            console.log(index);
            var person = documents[index];

            var length = person.timestamps.length;
            for (var i = 0; i < length; i++) {
                var newRow = table.insertRow();
                var name = person.name;
                var timestamp = person.timestamps[i];
                var datePartTimePart = timestamp.split(' ');

                var cell0 = newRow.insertCell(0);
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);

                cell0.textContent = name;
                cell1.textContent = datePartTimePart[0];
                cell2.textContent = datePartTimePart[1];
            }
        }).catch(function (e) {
            console.error('Error:', e);
        }).finally(function () {
            client.close();
        });
    });
}

function listDatabases(client) {
    client.db().admin().listDatabases().then(function (databasesList) {
        console.log("Databases:");
        databasesList.databases.forEach(function (db) {
            console.log(' - ' + db.name);
        });
    });
}

connectToMongoDB();

// Add a click event listener to the search button
// searchButton.addEventListener('click', connectToMongoDB);



