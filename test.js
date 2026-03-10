async function fetchJSONData(path) {
    const response = await fetch(path);
    console.log(response)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
let dialogNum = 0;

function getCharacterJPG(characterName)
{
    switch(characterName){
        case "Special Week":
            return "specialweek.jpg"
    }
}
var data=""
async function main(string) {
    data = await fetchJSONData(string);
    //return Object.keys(data['dialog'][dialogNum])
    //console.log(data);
    //console.log(Object.keys(data['dialog'][dialogNum]));
    return data
}

// main('./ofcourse.json');
// console.log(data)
const start =document.getElementById("start")
start.addEventListener("click", story)

//https://www.w3schools.com/jsref/jsref_promise_then.asp

//

// const test= main('./ofcourse.json').then(fetchedData => {
//     data = fetchedData
//     console.log("Outside function via then:", data)
// })
// console.log("H",data)
// console.log(test)
//console.log("j",fetchedData)
// const beginning=await main("./beginning.json")
// console.log(beginning)



function begin(){

}


let dialogtxt
let nametxt
let imgtxt



async function story(){
//call all functions here for the seamless story
console.log("WOW!!!!!!!!")
dialogtxt = await main("./beginning.json");

}

// console.log(currentScene)

    