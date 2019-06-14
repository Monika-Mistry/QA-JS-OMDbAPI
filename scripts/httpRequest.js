const makeRequest = (search) => {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();

        request.open("GET", "http://www.omdbapi.com/?apikey=13510c0e".concat(search));
    })
}