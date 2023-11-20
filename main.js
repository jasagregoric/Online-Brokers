document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("copyright").addEventListener("click", cFunction);
});

let sessionCells = JSON.parse(sessionStorage.getItem('sessionCells')) || [];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('rowSMCI').addEventListener('click', function () {
    const overlay = document.getElementById('overlaySMCI');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelSMCI').addEventListener('click', function () {
    const overlay = document.getElementById('overlaySMCI');
    overlay.style.display = 'none';
  });

  document.getElementById('rowTSLA').addEventListener('click', function () {
    const overlay = document.getElementById('overlayTSLA');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelTSLA').addEventListener('click', function () {
    const overlay = document.getElementById('overlayTSLA');
    overlay.style.display = 'none';
  });

  document.getElementById('rowAMZN').addEventListener('click', function () {
    const overlay = document.getElementById('overlayAMZN');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelAMZN').addEventListener('click', function () {
    const overlay = document.getElementById('overlayAMZN');
    overlay.style.display = 'none';
  });

  document.getElementById('rowMSFT').addEventListener('click', function () {
    const overlay = document.getElementById('overlayMSFT');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelMSFT').addEventListener('click', function () {
    const overlay = document.getElementById('overlayMSFT');
    overlay.style.display = 'none';
  });

  document.getElementById('rowBTC').addEventListener('click', function () {
    const overlay = document.getElementById('overlayBTC');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelBTC').addEventListener('click', function () {
    const overlay = document.getElementById('overlayBTC');
    overlay.style.display = 'none';
  });

  document.getElementById('rowXRP').addEventListener('click', function () {
    const overlay = document.getElementById('overlayXRP');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelXRP').addEventListener('click', function () {
    const overlay = document.getElementById('overlayXRP');
    overlay.style.display = 'none';
  });

  document.getElementById('rowHEIA').addEventListener('click', function () {
    const overlay = document.getElementById('overlayHEIA');
    overlay.style.display = 'flex';
  });

  document.getElementById('overlayCancelHEIA').addEventListener('click', function () {
    const overlay = document.getElementById('overlayHEIA');
    overlay.style.display = 'none';
  });
});


const purchasedStocks = [];
let val = 0;

document.addEventListener("DOMContentLoaded", function() {
  sessionCells = JSON.parse(sessionStorage.getItem('sessionCells')) || [];

  const table = document.getElementById('portTable');
  const purchasedStocks = [];

  const stocksToProcess = ["SMCI", "TSLA", "AMZN", "MSFT", "BTC", "XRP", "HEIA"];

  if (!Array.isArray(sessionCells)) {
    sessionCells = [];
  }

  populatePurchasedStocks();

  stocksToProcess.forEach(function(stockName) {
    sessionCells.forEach(function(cell) {
      const name = cell['name' + stockName];
      const value = cell['newValue' + stockName];

      if (name !== undefined && value !== undefined) {
        createCells(name, parseFloat(value).toFixed(2));
      }
    });
  });

  const sumValue = sessionStorage.getItem('sumValue');
  const totalSumDiv = document.getElementById('balance');
  if (sessionStorage.getItem('sumValue') !== null) {
    totalSumDiv.textContent = sumValue;
  } else {
    totalSumDiv.textContent = "0";
  }
  
});

//----------------------------------------------------------------SMCI-------------------------------------------------------------------

const cell1 = document.getElementById('cell1S');
cell1.classList.remove("black");
cell1.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitSMCI").addEventListener("click", function () {
    event.preventDefault();
    
    const price = data.SMCI.number;
    const inputField = document.getElementById("stockInputSMCI");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("SMCI");

    const overlay = document.getElementById('overlaySMCI');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "SMCI")== -1) {
      purchasedStocks.push(["SMCI", value, stock, price, price, 1, value]);
      createCells("SMCI", value);

      sessionCells.push({ nameSMCI: "SMCI", valueSMCI: value, stockSMCI: stock, priceSMCI: price, sumSmci: price, countSMCI: 1, newValueSMCI: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "SMCI");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2SMCI');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameSMCI === "SMCI");
      existingEntry.valueSMCI = purchasedStocks[$i][1];
      existingEntry.stockSMCI = purchasedStocks[$i][2];
      existingEntry.priceSMCI = purchasedStocks[$i][3];
      existingEntry.sumSMCI = purchasedStocks[$i][4];
      existingEntry.countSMCI = purchasedStocks[$i][5];
      existingEntry.newValueSMCI = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
  });
});

//----------------------------------------------------------------TSLA-------------------------------------------------------------------

const cell1T = document.getElementById('cell1T');
cell1T.classList.remove("black");
cell1T.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitTSLA").addEventListener("click", function () {
    event.preventDefault();
    
    const price = data.TSLA.number;
    const inputField = document.getElementById("stockInputTSLA");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("TSLA");

    const overlay = document.getElementById('overlayTSLA');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "TSLA")== -1) {
      purchasedStocks.push(["TSLA", value, stock, price, price, 1, value]);
      createCells("TSLA", value);

      sessionCells.push({ nameTSLA: "TSLA", valueTSLA: value, stockTSLA: stock, priceTSLA: price, sumTSLA: price, countTSLA: 1, newValueTSLA: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "TSLA");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2TSLA');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameTSLA === "TSLA");
      existingEntry.valueTSLA = purchasedStocks[$i][1];
      existingEntry.stockTSLA = purchasedStocks[$i][2];
      existingEntry.priceTSLA = purchasedStocks[$i][3];
      existingEntry.sumTSLA = purchasedStocks[$i][4];
      existingEntry.countTSLA = purchasedStocks[$i][5];
      existingEntry.newValueTSLA = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

//----------------------------------------------------------------AMZN-------------------------------------------------------------------

const cell1A = document.getElementById('cell1A');
cell1A.classList.remove("black");
cell1A.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitAMZN").addEventListener("click", function () {
    event.preventDefault();
    
    const price = data.AMZN.number;
    const inputField = document.getElementById("stockInputAMZN");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("AMZN");

    const overlay = document.getElementById('overlayAMZN');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "AMZN")== -1) {
      purchasedStocks.push(["AMZN", value, stock, price, price, 1, value]);
      createCells("AMZN", value);

      sessionCells.push({ nameAMZN: "AMZN", valueAMZN: value, stockAMZN: stock, priceAMZN: price, sumAMZN: price, countAMZN: 1, newValueAMZN: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "AMZN");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2AMZN');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameAMZN === "AMZN");
      existingEntry.valueAMZN = purchasedStocks[$i][1];
      existingEntry.stockAMZN = purchasedStocks[$i][2];
      existingEntry.priceAMZN = purchasedStocks[$i][3];
      existingEntry.sumAMZN = purchasedStocks[$i][4];
      existingEntry.countAMZN = purchasedStocks[$i][5];
      existingEntry.newValueAMZN = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

//----------------------------------------------------------------MSFT-------------------------------------------------------------------

const cell1M = document.getElementById('cell1M');
cell1M.classList.remove("black");
cell1M.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitMSFT").addEventListener("click", function () {
    event.preventDefault();
    
    const price = data.MSFT.number;
    const inputField = document.getElementById("stockInputMSFT");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("MSFT");

    const overlay = document.getElementById('overlayMSFT');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "MSFT")== -1) {
      purchasedStocks.push(["MSFT", value, stock, price, price, 1, value]);
      createCells("MSFT", value);

      sessionCells.push({ nameMSFT: "MSFT", valueMSFT: value, stockMSFT: stock, priceMSFT: price, sumMSFT: price, countMSFT: 1, newValueMSFT: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "MSFT");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;

      const cell = document.getElementById('cell2MSFT');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameMSFT === "MSFT");
      existingEntry.valueMSFT = purchasedStocks[$i][1];
      existingEntry.stockMSFT = purchasedStocks[$i][2];
      existingEntry.priceMSFT = purchasedStocks[$i][3];
      existingEntry.sumMSFT = purchasedStocks[$i][4];
      existingEntry.countMSFT = purchasedStocks[$i][5];
      existingEntry.newValueMSFT = purchasedStocks[$i][6];
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

//----------------------------------------------------------------BTC-------------------------------------------------------------------

const cell1B = document.getElementById('cell1B');
cell1B.classList.remove("black");
cell1B.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitBTC").addEventListener("click", function () {
    event.preventDefault();
    
    const price = parseFloat((data.BTC.number).replace(/,/g, ''));
    const inputField = document.getElementById("stockInputBTC");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("BTC");

    const overlay = document.getElementById('overlayBTC');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "BTC")== -1) {
      purchasedStocks.push(["BTC", value, stock, price, price, 1, value]);
      createCells("BTC", value);

      sessionCells.push({ nameBTC: "BTC", valueBTC: value, stockBTC: stock, priceBTC: price, sumBTC: price, countBTC: 1, newValueBTC: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "BTC");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2BTC');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameBTC === "BTC");
      existingEntry.valueBTC = purchasedStocks[$i][1];
      existingEntry.stockBTC = purchasedStocks[$i][2];
      existingEntry.priceBTC = purchasedStocks[$i][3];
      existingEntry.sumBTC = purchasedStocks[$i][4];
      existingEntry.countBTC = purchasedStocks[$i][5];
      existingEntry.newValueBTC = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

//----------------------------------------------------------------XRP-------------------------------------------------------------------

const cell1X = document.getElementById('cell1X');
cell1X.classList.remove("black");
cell1X.classList.add("red");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("overlaySubmitXRP").addEventListener("click", function (event) {
    event.preventDefault();

    const price = parseFloat(data.XRP.number.replace(/,/g, ''));
    const inputField = document.getElementById("stockInputXRP");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value) <= 0) {
      closeFunction();
      return;
    }
    purchaseFunction("XRP");

    const overlay = document.getElementById('overlayXRP');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if (hasEntry(purchasedStocks, "XRP") === -1) {
      purchasedStocks.push(["XRP", value, stock, price, price, 1, value]);
      createCells("XRP", value);

      sessionCells.push({ nameXRP: "XRP", valueXRP: value, stockXRP: stock, priceXRP: price, sumXRP: price, countXRP: 1, newValueXRP: value });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    } else {
      $i = hasEntry(purchasedStocks, "XRP");
      purchasedStocks[$i][1] = parseFloat(purchasedStocks[$i][1]) + parseFloat(value);
      purchasedStocks[$i][3] = addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2] = parseFloat(purchasedStocks[$i][2]) + parseFloat(stock);
      purchasedStocks[$i][4] = parseFloat(price) + parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5] = parseFloat(purchasedStocks[$i][5]) + 1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2XRP');
      cell.textContent = parseFloat(purchasedStocks[$i][6]).toFixed(2);

      const existingEntry = sessionCells.find(entry => entry.nameXRP === "XRP");
      existingEntry.valueXRP = purchasedStocks[$i][1];
      existingEntry.stockXRP = purchasedStocks[$i][2];
      existingEntry.priceXRP = purchasedStocks[$i][3];
      existingEntry.sumXRP = purchasedStocks[$i][4];
      existingEntry.countXRP = purchasedStocks[$i][5];
      existingEntry.newValueXRP = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

//----------------------------------------------------------------HEIA-------------------------------------------------------------------

const cell1H = document.getElementById('cell1H');
cell1H.classList.remove("black");
cell1H.classList.add("red");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlaySubmitHEIA").addEventListener("click", function () {
    event.preventDefault();
    
    const price = parseFloat((data.HEIA.number).replace(/,/g, ''));
    const inputField = document.getElementById("stockInputHEIA");
    let stock = 0;
    let value = 0;

    if (inputField.value === "" || parseFloat(inputField.value)<=0) {
      closeFunction();
      return;
    }
    purchaseFunction("HEIA");

    const overlay = document.getElementById('overlayHEIA');
    overlay.style.display = 'none';

    if (val == 0) {
      stock = (inputField.valueAsNumber / price).toFixed(2);
      value = inputField.valueAsNumber.toFixed(2);
    } else {
      stock = inputField.valueAsNumber.toFixed(2);
      value = (inputField.valueAsNumber * price).toFixed(2);
    }

    if(hasEntry(purchasedStocks, "HEIA")== -1) {
      purchasedStocks.push(["HEIA", value, stock, price, price, 1, value]);
      createCells("HEIA", value);

      sessionCells.push({ nameHEIA: "HEIA", valueHEIA: value, stockHEIA: stock, priceHEIA: price, sumHEIA: price, countHEIA: 1, newValueHEIA: value  });
      sessionStorage.setItem('sessionCells', JSON.stringify(sessionCells));
    }
    else{
      $i=hasEntry(purchasedStocks, "HEIA");
      purchasedStocks[$i][1]=parseFloat(purchasedStocks[$i][1])+parseFloat(value);
      purchasedStocks[$i][3]=addValueAndCalculateAverage(parseFloat(price), parseFloat(purchasedStocks[$i][4]), parseFloat(purchasedStocks[$i][5]));
      purchasedStocks[$i][2]=parseFloat(purchasedStocks[$i][2])+parseFloat(stock);
      purchasedStocks[$i][4]=parseFloat(price)+parseFloat(purchasedStocks[$i][4]);
      purchasedStocks[$i][5]=parseFloat(purchasedStocks[$i][5])+1;
      purchasedStocks[$i][6] = parseFloat(purchasedStocks[$i][6]) + parseFloat(value);

      const cell = document.getElementById('cell2HEIA');
      cell.textContent = (parseFloat(purchasedStocks[$i][1]).toFixed(2));

      const existingEntry = sessionCells.find(entry => entry.nameHEIA === "HEIA");
      existingEntry.valueHEIA = purchasedStocks[$i][1];
      existingEntry.stockHEIA = purchasedStocks[$i][2];
      existingEntry.priceHEIA = purchasedStocks[$i][3];
      existingEntry.sumHEIA = purchasedStocks[$i][4];
      existingEntry.countHEIA = purchasedStocks[$i][5];
      existingEntry.newValueHEIA = purchasedStocks[$i][6];

      sessionStorage.setItem('sessionCells', JSON.stringify(existingEntry));
    }
  });
});

function createCells($n, $v){
  const table = document.getElementById('portTable');
  const newRow = document.createElement('tr');
  const newCell1 = document.createElement('td');
  newCell1.textContent = $n;
  newCell1.setAttribute('id', ("cell1"+$n));
  newCell1.classList.add("puchasedCell");
  const newCell2 = document.createElement('td');
  newCell2.textContent = parseFloat($v).toFixed(2);
  newCell2.setAttribute('id', ("cell2"+$n));
  newCell2.classList.add("puchasedCell2");

  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);

  table.appendChild(newRow);
  localStorage.setItem('myTableHTML', table.innerHTML);
}

function hasEntry(array2D, $n) {
  for (let i = 0; i < array2D.length; i++) {
    if (array2D[i][0] === $n) {
      return i;
    }
  }
  return -1;
}

function addValueAndCalculateAverage(newValue, sum, count) {
  count++;
  sum += newValue;
  const newAverage = sum / count; 
  return newAverage;
}

function populatePurchasedStocks() {
  const stocksToProcess = ["SMCI", "TSLA", "AMZN", "MSFT", "BTC", "XRP", "HEIA"];
  purchasedStocks.length = 0; // Clear the array before repopulating
  stocksToProcess.forEach(function(stockName) {
    const hasStock = sessionCells.some(function(cell) {
      return cell['name' + stockName] === stockName;
    });
    if (hasStock) {
      const matchingCell = sessionCells.find(function(cell) {
        return cell['name' + stockName] === stockName;
      });
      purchasedStocks.push([
        matchingCell['name' + stockName],
        matchingCell['value' + stockName],
        matchingCell['stock' + stockName],
        matchingCell['price' + stockName],
        matchingCell['sum' + stockName],
        matchingCell['count' + stockName],
        matchingCell['newValue' + stockName]
      ]);
      console.log(matchingCell['newValue' + stockName]);
    }
  });
}

function closeFunction() {
  Swal.fire({
    title: '<span style="color: red; font-family: sans-serif;">Please enter a valid number!</span>',
    html: '<div style=line-height: 25px;"><span style="color: ##292929; font-family: sans-serif;"><br><b>No</b> negative or zero numbers.<br><b>No</b> empty spaces.</span></div>',
    icon: 'info',
    confirmButtonText: 'OK',
    iconColor: 'red',
    background: '#1d1d1d',
    heightAuto: false
  });
}

function cFunction() {
  Swal.fire({
    title: '<span style="color: white;">Credits!</span>',
    html: '<div style=line-height: 25px;"><span style="color: white;">Author: Jaša Gregorič<br>Date: November 2023<br>Mentor: Boštjan Vouk</span></div>',
    icon: 'info',
    confirmButtonText: 'OK',
    iconColor: 'white',
    background: '#1d1d1d',
    heightAuto: false
  });
}

function purchaseFunction($n) {
  Swal.fire({
    title: '<span style="color: white; font-family: sans-serif;">You have purchased<span> '+$n+' stock.<span>',
    icon: 'success',
    confirmButtonText: 'OK',
    iconColor: 'green',
    background: '#1d1d1d',
    heightAuto: false
  });
}
