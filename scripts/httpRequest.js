let searchQuery;
const getSearchQuery = () => {
    searchQuery = document.getElementById('searchQuery').value;
}

const makeRequest = (search) => {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();

        request.onload = () {
            if (request.status >= 200 && request.status <= 299) {
                resolve(request.response);
            } else {
                const reason = new Error("Oops, something went wrong! Error code: " + request.status);
                reject(reason);
            }
        };
        request.open("GET", "http://www.omdbapi.com/?apikey=13510c0e".concat(search));
        request.send();
    });
};