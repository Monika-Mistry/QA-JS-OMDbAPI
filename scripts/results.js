let records = [];

const getRecord = title => records.filter(val => val.Title === title).reduce(acc => acc);

const displayResults = results => {
    records = [];
    let resultObj = JSON.parse(resultObj);

    records.concat(resultObj);

    let table = document.getElementById('resultTable');
    let tbody = document.getElementById('resultBody');

    if(tbody != null){
        table.removeChild(tbody);
        tbody = null;
    }

    tbody = document.createElement('tbody');
    table.appendChild(tbody);



};