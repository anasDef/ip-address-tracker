/**
 * IP Address Tracker - Main Script
 * Handles IP searching, API fetching, and Leaflet map integration.
 */

// --- UI Elements Selection ---
const searchInp = document.getElementById("search-input");
const trackBtn = document.getElementById("track-btn");
const ipAddressEle = document.getElementById("ip-address");
const locationEle = document.getElementById("location");
const timezoneEle = document.getElementById("timezone");
const ispEle = document.getElementById("isp");
const errorMsg = document.getElementById("error-msg");

/**
 * Initialize Leaflet Map
 * Setting default coordinates to [0, 0] and zoom level 18
 */
let map = L.map("map").setView([0, 0], 18);
let marker = L.marker([0, 0]).addTo(map);

// Add OpenStreetMap tiles to the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/**
 * Fetches location data from IPIFY API and updates the UI/Map.
 * @param {string} [ipAdd] - Optional IP address  to search for.
 * If omitted, the API returns the user's current IP location.
 */
async function IpLocation(ipAdd) {
  try {
    // Construct API URL with optional IP parameter
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_dMjmFhHWEVnPjjNkCcdUzo4YEo4Rl${ipAdd ? `&ipAddress=${ipAdd}` : ""}`;

    const request = await fetch(url);
    const responses = await request.json();

    // Destructure required data from API response
    const {
      ip,
      isp,
      location: { country, lat, lng, region, timezone },
    } = responses;

    // --- Update UI Content ---
    ipAddressEle.innerHTML = ip;
    locationEle.innerHTML = `${region}, ${country}`;
    timezoneEle.innerHTML = `UTC ${timezone}`;
    ispEle.innerHTML = isp;

    // --- Update Map View & Marker ---
    // Smoothly move map to new coordinates
    map.setView([lat, lng], 16);

    // Remove old marker before adding a new one to prevent duplication
    if (marker) {
      map.removeLayer(marker);
    }

    marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>Location:</b> ${region}, ${country}`).openPopup();
  } catch (error) {
    console.error("Failed to fetch IP data:", error);
  }
}

// Initial call to load user's current location on page load
// IpLocation();

/**
 * Event Listener for Search Button
 * Validates user input against IPv4 Regex and triggers the API call.
 */
trackBtn.addEventListener("click", () => {
  const inputValue = searchInp.value.trim();

  // Regex to validate IPv4 address syntax
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (inputValue === "" || !ipRegex.test(inputValue)) {
    // Show error message if input is empty or invalid
    errorMsg.classList.add("show");
    errorMsg.setAttribute("aria-hidden", false);

    // Automatically hide error message after 4 seconds
    setTimeout(() => {
      errorMsg.classList.remove("show");
      errorMsg.setAttribute("aria-hidden", true);
    }, 4000);
  } else {
    // Proceed with API call if validation passes
    IpLocation(inputValue);
  }
});
