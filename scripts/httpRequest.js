const makeRequest = (search) => {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();

        request.onload = () => {
            if (request.status === 200) {
                res(request.response);
            } else {
                const reason = new Error("Oops, something went wrong! Error code: " + request.status);
                rej(reason);
            }
        };
        request.open("GET", "http://www.omdbapi.com/?apikey=13510c0e&s=".concat(search));
        request.send();
    });
};

const makePosterRequest = (id) => {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();

        request.onload = () => {
            if (request.status === 200) {
                res(request.response);
            } else {
                const reason = new Error("Oops, something went wrong! Error code: " + request.status);
                rej(reason);
            }
        };
        request.open("GET", "http://img.omdbapi.com/?apikey=13510c0e&i=".concat(id));
        request.send();
    });
}

const getSearchResult = () => {
    let searchQuery = document.getElementById('searchQuery').value;
    makeRequest(searchQuery).then(response => console.log(response)).catch(error => console.log(error.message));
    // makeRequest(searchQuery).then(response => displayResults(response)).catch(error => console.log(error.message));
}