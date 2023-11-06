'use strict'

// System

function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Firefox") !== -1) {
        return "Mozilla Firefox";
    } else if (userAgent.indexOf("Chrome") !== -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Safari") !== -1) {
        return "Apple Safari";
    } else if (userAgent.indexOf("Edge") !== -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
        return "Opera";
    } else if (userAgent.indexOf("Trident") !== -1) {
        return "Internet Explorer";
    } else {
        return "Unknown";
    }
}

const browserName = getBrowserName();
document.getElementById('Browser').innerHTML = (`Browser : ${browserName}.`);

function getOperatingSystem() {
    const platform = navigator.userAgent;

    if (platform.indexOf("Win") !== -1) {
        return "Windows";
    } else if (platform.indexOf("Mac") !== -1) {
        return "macOS";
    } else if (platform.indexOf("Linux") !== -1) {
        return "Linux";
    } else if (platform.indexOf("iOS") !== -1) {
        return "iOS";
    } else if (platform.indexOf("Android") !== -1) {
        return "Android";
    } else {
        return "Unknown";
    }
}

const osName = getOperatingSystem();
document.getElementById('OS').innerHTML = (` OS: ${osName}.`);


document.getElementById('Language').innerHTML = document.getElementById('Language').innerHTML
    + 'Language: ' + navigator.language


// Window

const pageW = document.getElementById('page-w');
const pageH = document.getElementById('page-h');

function setWindowDimensions() {
    pageW.innerText = `Window width: ${window.innerWidth}px`;
    pageH.innerText = `Window height: ${window.innerHeight}px`;
}

window.addEventListener('load', () => {
    setWindowDimensions();
});

window.addEventListener('resize', () => {
    setWindowDimensions();
});

const pageO = document.getElementById('page-o')

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        pageO.innerText = 'Orientation: Portrait';
    } else {
        pageO.innerText = 'Orientation: Landscape';
    }
}

window.addEventListener('resize', () => {
    checkOrientation();
});
window.addEventListener('load', () => {
    checkOrientation();
});

// Connection Status

const connectionStatus = document.getElementById('status');

function updateStatus(online) {
    connectionStatus.innerText = online ? 'Online' : 'Offline';
    connectionStatus.classList.toggle('connected', online);
    connectionStatus.classList.toggle('disconnected', !online);
}

function OnlineStatusChange() {
    updateStatus(navigator.onLine);
}

window.addEventListener('online', OnlineStatusChange);
window.addEventListener('offline', OnlineStatusChange);

OnlineStatusChange();

// Battery
const batteryLevelElem = document.getElementById('battery-level');
const batteryStatusElem = document.getElementById('battery-status');

function updateBatteryLevel(battery) {
    const batteryLevel = Math.trunc(battery.level * 100) + '%';
    batteryLevelElem.textContent = 'Level: ' + batteryLevel;
}

function updateBatteryStatus(battery) {
    const batteryStatus = battery.charging ? 'Charging' : 'Not Charging';
    batteryStatusElem.textContent = 'Status: ' + batteryStatus;
}

function handleBatteryChange(event) {
    updateBatteryLevel(event.target);
    updateBatteryStatus(event.target);
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {

        updateBatteryLevel(battery);
        updateBatteryStatus(battery);

        battery.addEventListener('levelchange', handleBatteryChange);
        battery.addEventListener('chargingchange', handleBatteryChange);
    })
}

// Mouse location
const cursorX = document.getElementById('cursor-x');
const cursorY = document.getElementById('cursor-y');

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    
    cursorX.innerText = `Cursor X: ${x}`
    cursorY.innerText = `Cursor Y: ${y}`
}); 

