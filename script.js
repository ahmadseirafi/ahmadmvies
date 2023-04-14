
async function searchRequest(name) {
    console.log(name);
    const response = await fetch(`https://www.omdbapi.com/?apikey=65bc98fd&s=${name}&plot=full`);
    const jsonData = await response.json();
    let container = document.getElementById("cont");
    for (let i = 0; i < jsonData.Search.length; i++) {
        console.log(jsonData.Search[i])
        let movie = document.createElement('div');
        let movieImage = document.createElement('img');
        movieImage.src = jsonData.Search[i].Poster
        movie.className = "movie"
        let info = document.createElement('div');
        info.className = "info"
        let title = document.createElement("p");
        let year = document.createElement("p");
        let type = document.createElement("p");
        title.innerHTML = "title:" + jsonData.Search[i].Title
        title.id = "title";
        year.innerHTML = "year:" + jsonData.Search[i].Year
        type.innerHTML = "type:" + jsonData.Search[i].Type
        info.appendChild(title)
        info.appendChild(year)
        info.appendChild(type)
        movie.appendChild(movieImage);
        movie.appendChild(info)
        container.appendChild(movie);
        let hr = document.createElement("hr");
        hr.className = "dashed"
        container.appendChild(hr);


    }

}


window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    searchRequest(data.name);
}

