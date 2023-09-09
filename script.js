// Load JSON data (assuming the data is in a file named 'data.json')
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the table element by its id
        console.log(data[0]);
        // const table = document.getElementById('actions-log');

        // // Create table header row
        // const headerRow = document.createElement('tr');
        // for (const key in data[0]) {
        //     const headerCell = document.createElement('th');
        //     headerCell.textContent = key;
        //     headerRow.appendChild(headerCell);
        // }
        // table.appendChild(headerRow);

        // // Populate the table with data
        // data.forEach(item => {
        //     const dataRow = document.createElement('tr');
        //     for (const key in item) {
        //         const dataCell = document.createElement('td');
        //         dataCell.textContent = item[key];
        //         dataRow.appendChild(dataCell);
        //     }
        //     table.appendChild(dataRow);
        // });
    })
    .catch(error => console.error('Error loading JSON data:', error));