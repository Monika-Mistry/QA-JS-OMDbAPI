let records = [];
const headers = ['Title', 'Year', 'Type', 'More Details']

const getRecord = title => records.filter(val => val.Title === title).reduce(acc => acc);

const displayResults = results => {
    records = [];
    let resultObj = JSON.parse(resultObj);

    records.concat(resultObj);

    let table = document.getElementById('resultTable');
    let tbody = document.getElementById('resultBody');

    if (tbody != null) {
        table.removeChild(tbody);
        tbody = null;
    }

    tbody = table.createTBody();

    //create table rows
    records.forEach(val => {
        let row = tbody.insertRow();

        for (let i = 0; i < headers.length; i++) {
            let cell = row.insertCell();
            let content;
            if (i < 3) {
                content = document.createTextNode(val[headers[i]]);
                cell.append(content);
            } else {
                cell.append("detail");
            }

        }

    });


};