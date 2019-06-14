
const headers = ['Title', 'Year', 'Type', 'More Details']
let records;

const getRecord = title => records.filter(val => val.Title === title).reduce(acc => acc);

const displayResults = results => {
    // console.log(results);
    let resultObj = JSON.parse(results);
    //console.log(resultObj);
    // console.log(resultObj.Search);
    records = resultObj.Search;
    // console.log(records);

    let table = document.getElementById('resultTable');
    let tbody = document.getElementById('resultBody');

    //remove any rows except header
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

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
                // console.log(val[headers[i]]); val[headers[i]]
                content = document.createTextNode(val[headers[i]]);
                cell.append(content);
            } else {
                //create button for more details
                let btn = document.createElement('input');
                btn.type = "button";
                btn.value = "Details";
                //btn.addEventListener("click", buttonClick());
                cell.append(btn)
            }

        }

    });

};

