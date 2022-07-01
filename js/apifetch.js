const api_url="https://api.covid19api.com/summary";

function getData(url)
{
    fetch(url).
    then((data)=>{
        return data.json();}).
    then((final_data)=>{
    //   display_data(final_data);
        console.log(final_data);
        let country_name=final_data.Countries[77].Country;
        // let Date=final_data.Countries[77].Date;
        let today = new Date().toDateString();
        let T_confirmed=final_data.Countries[77].TotalConfirmed;
        let T_deaths=final_data.Countries[77].TotalDeaths;
        let NewConfirmed=final_data.Countries[77].NewConfirmed;
        let NewDeaths=final_data.Countries[77].NewDeaths;
        display_data(country_name,today,T_confirmed,T_deaths,NewConfirmed,NewDeaths);
}).
 catch((error) => console.log(error.message));
}
function display_data(country_name,Date,T_confirmed,T_deaths,NewConfirmed,NewDeaths)
{
    var pretag=document.createElement("pre");
    pretag.innerHTML=`<span>Country Name :</span> ${country_name}<br><br><br><span>Date :</span> ${Date}<br><br><br><span>Total Cases :</span> ${T_confirmed}<br><br><br><span>Total Deaths :</span> ${T_deaths}<br><br><br><span>New confirmed :</span> ${NewConfirmed}<br><br><br><span>New deaths :</span> ${NewDeaths}`;

    var datasection=document.getElementById("data");
    datasection.appendChild(pretag);
}

getData(api_url);
