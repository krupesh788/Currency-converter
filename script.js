function currency(){



    let amount = document.getElementById("amount").value;

    let usdValue = amount / 84;
    let eurValue = amount / 90.59;
    let sgpValue = amount /62.25;
    let cadValue = amount / 62;
    let ausValue = amount / 55;
    let nzdValue = amount / 51.54;


document.getElementById("result").innerHTML = `USD: ${usdValue.toFixed(2)}`;
document.getElementById("result").innerHTML += `<br> EUR: ${eurValue.toFixed(2)}`;
document.getElementById("result").innerHTML += `<br> SGP: ${sgpValue.toFixed(2)}`;
document.getElementById("result").innerHTML += `<br> CAD: ${cadValue.toFixed(2)}`;
document.getElementById("result").innerHTML += `<br> AUS: ${ausValue.toFixed(2)}`;
document.getElementById("result").innerHTML += `<br> NZD: ${nzdValue.toFixed(2)}`;


}
