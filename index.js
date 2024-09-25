const search = document.querySelector('#search');
const searchbtn = document.querySelector('#search-btn');
const imgContainer = document.querySelector('.image-container');

searchbtn.addEventListener('click', async () => {
    const search_value = search.value;
    console.log(search_value, "search_value");

    if (search_value === '') {
        alert('Please enter a search term');
        return;
    }

    const key = '0iDU6E4clY07SdAO-LmG0G-GUfjiZYrjeuZPwe3X2rY';
    const url = `https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}`;

    let response = await fetch(url);
    let data = await response.json();

    console.log(data, "data");
    disImages(data);
});

function disImages(data) {
   // imgContainer.innerHTML = ''; 

    data.results.forEach(element => {
        console.log(element.urls.regular, "element.urls.regular");
        const img = document.createElement('img');
        img.src = element.urls.regular;
        imgContainer.appendChild(img);
        
    });
}
