// declaring the varibales that we use in the  projection
let global_case = document.getElementById('global_case');
let global_death = document.getElementById('global_death');
let global_recover = document.getElementById('global_recover');

let Local_case = document.getElementById('Local_case');
let Local_death = document.getElementById('Local_death');
let Local_recover = document.getElementById('Local_recover');

// declare the button that we use
let get_golbal = document.getElementById('get_global');

// add eventlistner to the buttons
get_golbal.addEventListener('click', get_golbalData);
// get_local.addEventListener('click', get_localData);


function get_golbalData() {

    // using fetch API  to fetch data from the covid 19 API
    fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((value) => {
            global_case.value = value.Global.TotalConfirmed;
            global_death.value = value.Global.TotalDeaths;
            global_recover.value = value.Global.TotalRecovered;

            Local_case.value = value['Countries'][56].TotalConfirmed;
            Local_death.value = value['Countries'][56].TotalDeaths;
            Local_recover.value = value['Countries'][56].TotalRecovered;
        })
        .catch((error) => console.log(error))

    // using Ajax to fetch data from the covid 19 api
    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //         let value = JSON.parse(this.responseText);
    //         global_case.value = value.Global.TotalConfirmed;
    //         global_death.value = value.Global.TotalDeaths;
    //         global_recover.value = value.Global.TotalRecovered;

    //         Local_case.value = value['Countries'][56].TotalConfirmed;
    //         Local_death.value = value['Countries'][56].TotalDeaths;
    //         Local_recover.value = value['Countries'][56].TotalRecovered;
    //         // console.log(value['Countries'][56].TotalConfirmed);
    //     }
    //     else {
    //         console.log('you ger error');
    //     }
    // }
    // xhttp.open('GET', 'https://api.covid19api.com/summary');
    // xhttp.send();
}

setInterval(() => {
    get_golbalData();
}, 3000);


// api url https://api.covid19api.com/
