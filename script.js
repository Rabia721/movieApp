var searchBtn = document.querySelector('.searchBtn');
var searchInput = document.querySelector('.searchInput');
let APIkey ='6ca4c5e8'
var form = document.querySelector('.header')

const getData = async ()=>{
    const fetchData =await fetch(`http://img.omdbapi.com/?apikey=${APIkey}&t="pk"`)
    const responseData = await fetchData.json();

    console.log(responseData)

//     var div = document.createElement('div');
//     div.classList.add('card')
//     div.innerHTML=
//     `
//          <h1>${responseData.name}</h1>
//          <p></p>
//          `
// document.querySelector('.groupCard').appendChild(div)
         
//     console.log(div)

}
getData()


searchBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    let movieName = searchInput.value
console.log(movieName)
// if( movieName != ''){
//     getData()

// }else{
//     // document.querySelector('.card').innerHTML='search valid movie name'
// }

})
