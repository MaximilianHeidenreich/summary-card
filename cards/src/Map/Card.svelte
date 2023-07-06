<script lang="ts">
  import { onMount } from 'svelte'
  import type { Context } from 'deta-space-cards'

  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  
  export let city = 'Berlin'
  export let context: Context

  const getCityInfo = async () => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`)
    const data = await response.json()
    return data[0]
  }

  onMount(async () => {
    const { lat, lon } = await getCityInfo()

    const map = L.map('map').setView([lat, lon], 13)

    L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map)

    L.marker([lat, lon]).addTo(map)

    context.showSuccess('Map loaded!')
  })
</script>

<div id="map" style="height: 400px;"></div>


