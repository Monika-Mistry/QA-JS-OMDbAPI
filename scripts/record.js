const getValues = () => {
    document.getElementById('title').innerHTML = sessionStorage.getItem('title');
    document.getElementById('year').innerHTML = sessionStorage.getItem('year');
    // document.getElementById('title').innerHTML = sessionStorage.getItem('title');
    document.getElementById('poster').src = sessionStorage.getItem('poster');
};

const home = () => {
    window.location = "index.html";

};