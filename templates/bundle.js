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
const jsonData = require('./sample1.json');

// Get references to the input field and search button
const searchName = document.getElementById('filter1');
const searchDate = document.getElementById('filter2');
const searchButton = document.getElementById('searchButton');



// Function to handle the search
function handleSearch() {
    const table = document.getElementById('actions-log');
    console.log(table.rows.length);
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    // console.log(searchName);
    const index = jsonData.findIndex(obj => obj.name === searchName.value);
    // console.log(index);
    const person = jsonData[index];
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
}

// Add a click event listener to the search button
searchButton.addEventListener('click', handleSearch);

},{"./sample1.json":1}]},{},[2]);
