document.addEventListener("DOMContentLoaded", function () {
    let body = document.getElementById("iceandfire");
    body.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-warning">

    <a class="navbar-brand" href="#">Game Of Thrones</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-nav btn-group">
      <button class="nav-link button" id="Book">Books</button>
      <button class="nav-link button" id="Char">Characters</button>
      <button class="nav-link button" id="House">Houses</button>
    </div>
    <div>
      <audio controls>
        <source src="Game.mp3" type="audio/ogg">
      </audio>
    </div>
  </nav>`
    let div = document.createElement("div");
    div.setAttribute("class", "book-header");
    let img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg";
    img.alt = "Game of Throne"
    body.appendChild(div);
    div.appendChild(img);
    let div1 = document.createElement("div");
    div1.setAttribute("class", "input-group mb-3");
    body.appendChild(div1);
    let form = document.createElement("form");
    /*form.setAttribute("action", "");
    form.setAttribute("class", "books-list-form"); 
    div1.appendChild(form);*/
    let h3 = document.createElement("h3");
    h3.setAttribute('value', "Search");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("aria-label", "Search as House or Book or Character");
    input.setAttribute("aria-describedby", "button-addon2");
    input.setAttribute("Placeholder", "Search as House or Book or Character");
    input.setAttribute("class", "form-control");

    //let br1=document.createElement("BR");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "input-group-append");
    div1.appendChild(div2);
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "button-addon2");
    button.setAttribute("value", "Button");
    button.setAttribute("class", "btn btn-outline-secondary");
    var t = document.createTextNode("Search");
    button.appendChild(t);
    div1.appendChild(h3);
    div1.appendChild(input);
    div1.appendChild(div2);
    div1.appendChild(button);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "book-collection");
    body.appendChild(div3);
    
    /*let nav=document.createElement("nav");
    nav.setAttribute("class","navbar navbar-expand-lg navbar-light bg-warning");
    body.appendChild(nav); 
    let a=document.createElement("a");
    
    nav.setAttribute("class", "navbar-brand");
    a.innerHTML="Game Of Thrones";
    nav.appendChild(a);
    
    let button_h=document.createElement("button");
    button_h.setAttribute("class","navbar-toggler");
    button_h.setAttribute("type","button");
    button_h.setAttribute("data-toggle","collapse");
    button_h.setAttribute("data-target","#navbarNavAltMarkup");
    button_h.setAttribute("aria-controls","#navbarNavAltMarkup");
    button_h.setAttribute("aria-expanded","false");
    button_h.setAttribute("aria-label","Toggle navigation");
    nav.appendChild(button_h);
    
    let span=document.createElement("span");
    span.setAttribute("class","navbar-toggler-icon");
    button_h.appendChild(span);
    
    let div_h=document.createElement("div");
    div_h.setAttribute("class","navbar-nav btn-group");
   
    let home1=document.createElement("button");
    home1.setAttribute("id","home");
    home1.setAttribute("class","nav-link button");
    let a1=document.createTextNode("Home");
    home1.appendChild(a1);
    let Book1=document.createElement("button");
    Book1.setAttribute("id","Book");
    Book1.setAttribute("class","nav-link button");
    let a2=document.createTextNode("Book");
    Book1.appendChild(a2);
    let Char1=document.createElement("button");
    Char1.setAttribute("id","Char");
    Char1.setAttribute("class","nav-link button");
    let a3=document.createTextNode("Characters");
    Char1.appendChild(a3);
    let House1=document.createElement("button");
    House1.setAttribute("id","House");
    House1.setAttribute("class","nav-link button");
    let a4=document.createTextNode("Houses");
    House1.appendChild(a4);

    div_h.appendChild(home1);
    div_h.appendChild(Book1);
    div_h.appendChild(Char1);
    div_h.appendChild(House1);

    nav.appendChild(div_h);*/

    

    //let home = document.querySelector("#home");
    let Book = document.querySelector("#Book");
    let Char=document.querySelector("#Char");
    let House=document.querySelector("#House");

    let para = document.createElement("p");

  
        let myid = document.getElementsByClassName("para");
        if (myid) {
            para.setAttribute("class", "para");
            div3.appendChild(para);
            para.innerHTML = `Welcome</br>to</br>Game of Thrones Wiki`
        };

//location.reload();


    Book.addEventListener("click", function () {
    
    const API_URL = "https://www.anapioficeandfire.com/api/books";

    fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (books) {
      console.log(books);
      renderAll(books);
    });

    function renderBook(book) {
        const toyDiv = document.createElement("div");
        //let k=fetchData(book.characters[0]);
        //k.then((res)=>console.log(res.name)).catch(console.log());
        toyDiv.className = "card";
        toyDiv.innerHTML = `
          <h3>${book.name}</h3>
          <dl>
          <dt>Isbn:</dt><td>${book.isbn}</td>
          <dt>No of Pages:</dt><td>${book.numberOfPages}</td>
          <dt>Author:</dt><td>${book.authors[0]}</td>
          <dt>Publisher:</dt><td>${book.publisher}</td>
          <dt>Released Date:</dt><td>${book.released}</td> 
          <dt>Charaters 1:</dt><td>${book.characters[0]}</td>
          <dt>Charaters 2:</dt><td>${book.characters[1]}</td>
          <dt>Charaters 3:</dt><td>${book.characters[2]}</td>
          <dt>Charaters 4:</dt><td>${book.characters[3]}</td>
          <dt>Charaters 5:</dt><td>${book.characters[4]}</td>
          </dl>`;
    
        div3.appendChild(toyDiv);
      }
      function renderAll(books) {
        div3.innerHTML = "<h2>Books<h2>";
        let br=document.createElement("BR");
        div3.appendChild(br);
        //all the toys to render inside dom
        books.forEach((book) => renderBook(book));       
      }

      

    /* async function fetchData(url) {
        try{
            // Storing response
            const response = await fetch(url); 
            // Storing data in form of JSON
            const data = await response.text();
            return JSON.parse(data);
        }catch{
            console.log("error")    
           }
     }*/
    })





Char.addEventListener("click", function () {displayChar(1,50)})

function displayChar(a,b){
    const API_URL = `https://www.anapioficeandfire.com/api/characters?page=${a}&pagesize=${b}`;

    fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (chars) {
      console.log(chars);
      renderAll(chars);
    });

    function renderChar(char) {
        const toyDiv = document.createElement("div");
        toyDiv.className = "card1";
        toyDiv.innerHTML = `
          <h3>${char.name}</h3>
          <dl>
          <dt>Gender:</dt><td>${char.gender}</td>
          <dt>Culture:</dt><td>${char.culture}</td>
          <dt>Played BY:</dt><td>${char.playedBy[0]}</td>
          <dt>Aliases:</dt><td>${char.aliases[0]}</td>
          </dl>`;
    
        div3.appendChild(toyDiv);
      }
      function renderAll(chars) {
        div3.innerHTML = "<h2>Characters<h2>";
        let br=document.createElement("BR");
        div3.appendChild(br);
        //all the toys to render inside dom
        chars.forEach((char) => renderChar(char));       
      }}


      House.addEventListener("click", function () {displayHouse(1,50)})

      function displayHouse(x,y){
        const API_URL = `https://www.anapioficeandfire.com/api/houses?page=${x}&pagesize=${y}`;
    
        fetch(API_URL)
        .then(function (response) {
          return response.json();
        })
        .then(function (houses) {
          console.log(houses);
          renderAll(houses);
        });
    
        function renderHouse(house) {
            const toyDiv = document.createElement("div");
            toyDiv.className = "card2";
            toyDiv.innerHTML = `
              <h3>${house.name}</h3>
              <dl>
              <dt>Region:</dt><td>${house.region}</td>
              <dt>coatOfArms:</dt><td>${house.coatOfArms}</td>
              <dt>words:</dt><td>${house.words}</td>
              <dt>titles:</dt><td>${house.titles[0]}</td>
              <dt>seats:</dt><td>${house.seats[0]}</td>
              </dl>`;
        
            div3.appendChild(toyDiv);
          }
          function renderAll(houses) {
            div3.innerHTML = "<h2>Houses<h2>";
            let br=document.createElement("BR");
            div3.appendChild(br);
            //all the toys to render inside dom
            houses.forEach((house) => renderHouse(house));       
          }}

    



});