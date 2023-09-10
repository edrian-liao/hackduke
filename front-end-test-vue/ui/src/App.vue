<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">DoseDocker</b-navbar-brand>      
      <b-button @click="refresh">Refresh</b-button>
    </b-navbar>
    <!-- <b-form-group label="Patient Name:" label-for="patient-name-input">
      <b-form-input id="patient-name-input" v-model="patientName" />
    </b-form-group>
    <b-button @click="search">Search</b-button> -->
    
    <b-table :items="data" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'

const data: Ref<any[]> = ref([])

async function refresh() {
  const result = await fetch("/api/box_status")
  data.value = await result.json()
}
onMounted(refresh)

async function search() {
  const result = await fetch("/api/box_status")
  data.value = await result.json()
}

</script>