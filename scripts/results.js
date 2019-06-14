let records = [];

const getRecord = title => records.filter(val => val.Title === title).reduce(acc => acc);

const displayResults = results => {
    records = [];
    let resultObj = JSON.parse(resultObj);

    records.concat(resultObj);

    let table = document.getElementById('resultTable')



};