var input = document.getElementById("any")

function already() {
    var data;
    // fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ddd4fe361bc98bd7ee7bdf83fd4da229&units=metric`
    // )
    fetch(`https://newsapi.org/v2/everything?q=Pakistan&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}

already()

function abc() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (input.value === "") {
                swal("Error!", "Input Must Not Be Empty!", "error");
                already()
            }
            if (data.articles.length === 0) {
                swal("Error!", "Plzz Enter Valid Word!", "error");
                input.value = ""
                already()
            }

            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
function business() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=business&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (data.articles.length === 0) {
                alert("kajkl")
            }
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
function world() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=world&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (data.articles.length === 0) {
                alert("kajkl")
            }
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
function sports() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (data.articles.length === 0) {
                alert("kajkl")
            }
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
function currency() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=currency&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (data.articles.length === 0) {
                alert("kajkl")
            }
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
function politics() {
    var content = document.querySelector(".main")
    content.innerHTML = ""
    var data;

    fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=63afb635e4154642933e2b2a2fce34a8`)
        .then((res) => res.json())
        .then((res) => {
            data = res;
            if (data.articles.length === 0) {
                alert("kajkl")
            }
            var content = document.querySelector(".main")
            console.log(data.articles)
            content.innerHTML = ""
            for (var i = 0; i < data.articles.length; i++) {

                // cardtitle.innerHTML += (data.articles[i].title)
                content.innerHTML += ` <div class="oneside"> <div class="text">
        <h1 class="card-title">${data.articles[i].title}</h1>
         <p class="card-text1">${data.articles[i].content}</p>
        <p class="card-text2">${data.articles[i].author}</p>
        <p class="card-text3">${data.articles[i].publishedAt} | ${data.articles[i].source.name}</p>
    </div>
    <img class="img" src="${data.articles[i].urlToImage}">
    <a href="${data.articles[i].url}"> <input type="button" value="Read More"></a>
    </div> </div>`}
        })
        .catch((err) => {
            console.log("Error", err)
        })
}
