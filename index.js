let baseURL = https://github.com/gionoa/Formula1API.git,

function racingList2022() {
    // Get country list and populate select dropdown
    // let countryListURL = `${baseURL}/countries`;
    fetch(`${baseURL}/countries`)
        .then(response => response.json())
        .then(jsonData => {
            for(let racingInfo of jsonData) {
                racingInfo.push(racingInfo);
                let countryEntry = document.createElement('option');
                countryEntry.value = `${countryInfo.Country}`;
                countryEntry.innerText = `${countryInfo.Country}`;
                if(countryInfo.Country == 'United Kingdom') {
                    countryEntry.defaultSelected = 'selected';
                }
                countrySelect.appendChild(countryEntry);
            }
        });
}


function positionAndRankList() {
    // Get country list and populate select dropdown
    // let countryListURL = `${baseURL}/countries`;
    fetch(`${baseURL}/driver`)
        .then(response => response.json())
        .then(jsonData => {
            for(let driverInfo of jsonData) {
                rankList.push(driverInfo);
                let driverEntry = document.createElement('option');
                countryEntry.value = `${countryInfo.Driver}`;
                countryEntry.innerText = `${countryInfo.Driver}`;
                if(driverInfo.Driver == (driver[0] == 'a')); 
                    countryEntry.defaultSelected = 'selected';
                }
                countrySelect.appendChild(countryEntry);
            }
        )};