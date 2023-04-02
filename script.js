//Quote API : https://api.api-ninjas.com/v1/quotes?
// Using promises :
const Quotes = document.querySelector("#quote");
const qBtn = document.querySelector("#qbtn");

// const generateQuote = () => {
//     fetch("https://api.quotable.io/random")
//     .then((res) => res.json())
//     .then((data) => {
//         // const {content, author} = data;
//         // console.log(content);
//         Quotes.innerHTML = data.content;
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }



//using async and await:
const generateQuote = async() => {
    try{
        const res = await fetch("https://api.quotable.io/random")
        const data = await res.json();
        Quotes.innerHTML = data.content;
    }catch(error){
        console.log(`the error is $(error)`);
    }
}

qBtn.addEventListener("click", generateQuote);
generateQuote();