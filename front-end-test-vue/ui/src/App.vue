<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoseDocker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
</template>
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">DoseDocker</b-navbar-brand>      
      <b-button @click="refresh">Refresh</b-button>
    </b-navbar>
    <b-form-group label="Patient Name:" label-for="patient-name-input">
      <b-form-input id="patient-name-input" v-model="patientName" />
    </b-form-group>
    <b-button @click="search">Search</b-button>
    
    <b-table :items="data" />
  </div>
</template>
<template>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DoseDocker</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Roboto:wght@700&display=swap" rel="stylesheet">
      <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
  </head>
  <body>
      <div class = "search-container">
          <label for="filter1">Patient Name: </label>
          <input type="text" id="filter1" placeholder="e.g. Edrian Liao">
          <label for="filter2">Date:  </label>
          <input type="text" id="filter2" placeholder="Enter date here">
          <button id="searchButton">Search</button>
      </div>
      

      <!-- Box Status -->
      <div class = "box">
          <!-- Card per Day (7 card in total) -->
          <div class = "card">
              <h2>Sun</h2>
          </div>
          <div class = "card">
              <h2>Mon</h2>
          </div>
          <div class = "card">
              <h2>Tue</h2>
          </div>
          <div class = "card">
              <h2>Wed</h2>
          </div>
          <div class = "card">
              <h2>Thu</h2>
          </div>
          <div class = "card">
              <h2>Fri</h2>
          </div>
          <div class = "card">
              <h2>Sat</h2>
          </div>
      </div>
      
      <div class = "table-container">
          <div class="table">
              <h1>Patient Actions Log</h1>
              <p>Insert description of this table</p>
              <table id = "actions-log">
                  <thead>
                      <tr>
                          <th>Patient</th>
                          <th>Date</th>
                          <th>Time</th>
                      </tr>
                  </thead>
                  <tbody>
                      <!-- Data will be populated here dynamically from MongoDB -->
                  </tbody>
              </table>
          </div>


          <div class="table">
              <h1>Medicine Administration Log</h1>
              <p>Insert description of this table</p>
              <table id = "admin-log">
                  <thead>
                      <tr>
                          <th>Patient</th>
                          <th>Medicine</th>
                          <th>Nurses-in-charge</th>
                      </tr>
                  </thead>
                  <tbody>
                      <!-- Data will be populated here dynamically from MongoDB -->
                  </tbody>
              </table>
          </div>
      </div>

      <script type = "module" src="script.js"></script>
  </body>
  </html>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'

const box_status_data: Ref<any[]> = ref([])

async function refresh() {
  const result = await fetch("/api/box_status")
  box_status_data.value = await result.json()
}
onMounted(refresh)

// props
interface Props {
    legal: string
}
  
// default values for props
const props = withDefaults(defineProps<Props>(), {
    legal: undefined
})

</script>

<style>
  /* Global styles */
  body {
    align-items: center;
    font-family: 'Lato', sans-serif;
    max-width: 100%; /* Adjust this value to your desired maximum width */
    margin: 30px auto 0;
    padding: 30px;
  }

  h1, h2, caption{
      font-family: 'Roboto', sans-serif;
  }

  /* Style for the search bar container */
  .search-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 60%; /* Adjust the maximum width as needed */
      margin: 0 auto;
      padding: 20px;
  }

  /* Style for the input fields */
  input[type="text"] {
      flex: 1;
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: 'Lato', sans-serif;
      font-size: 16px;
  }

  /* Style for the search button */
  button {
      background-color: #7d817f;
      color: #fff;
      border: none;
      border-radius: 20px;
      margin-left: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
  }

  /* Hover effect for the search button */
  button:hover {
      background-color: #70E9AD;
      color: #000;
  }


  .box {
      max-width: 80%;
      margin: 0 auto;
      padding: 10px;
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }

  .card {
      flex: 1;
      width: calc(14.2857% - 20px); /* 100% / 7 cards - 20px margin */
      /* padding-top: calc(14.2857% - 20px); Maintain a 1:1 aspect ratio */
      margin: 10px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  }

  .table-container {
      max-width: 80%;
      display: flex; /* Use flexbox for horizontal layout */
      flex-wrap: wrap; /* Allow tables to wrap to the next line on smaller screens */
      justify-content: space-between; /*Space tables evenly*/
      margin: 20px auto;
  }

  .table {
          background-color: #70E9AD;
          width: auto;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          
      }

  table {
      border-collapse: collapse;
      width: 90%; /* Adjust the width as needed */
      border: 1px solid #ddd;
      margin: 5px;
      align-items: center;
  }

  th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      background-color: #f2f2f2;
  }
  th {
      background-color: #f2f2f2;
  }

  
</style>