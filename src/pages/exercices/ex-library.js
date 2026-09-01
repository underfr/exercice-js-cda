import { v4 as uuidv4 } from 'uuid'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// ========================
// UUID
// ========================

const uuidElement = document.getElementById('uuid')
const generateButton = document.getElementById('generateUuid')
const copyButton = document.getElementById('copyUuid')

function generateUuid() {
    const uuid = uuidv4()

    uuidElement.textContent = uuid

    return uuid
}

// Génération initiale
generateUuid()

// Bouton générer
generateButton.addEventListener('click', () => {
    generateUuid()
})

// Copier
copyButton.addEventListener('click', async () => {
    const uuid = uuidElement.textContent

    await navigator.clipboard.writeText(uuid)

    copyButton.textContent = 'Copié !'

    setTimeout(() => {
        copyButton.textContent = 'Copier'
    }, 1500)
})


// ========================
// LEAFLET
// ========================

const defaultPosition = [51.505, -0.09]

const map = L.map('map').setView(defaultPosition, 13)

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map)


// Marqueur
const marker = L.marker([51.5, -0.09])
    .addTo(map)

marker.bindPopup(`
    <strong>London</strong><br>
    Exemple de marqueur Leaflet.
`).openPopup()


// Recentrer la carte
const resetMapButton = document.getElementById('resetMap')

resetMapButton.addEventListener('click', () => {
    map.setView(defaultPosition, 13)
})