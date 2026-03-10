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
let dialogtxt
let nametxt
let imgtxt
let actualdialogtxt;
let waitnoactualactualdialogtxt;


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



async function begin(){
await access("./beginning.json")
const textpara= document.getElementById("textdisplay")
textpara.textContent=waitnoactualactualdialogtxt
}



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

async function access(jsonfile){

dialogtxt = await main(jsonfile);
actualdialogtxt=dialogtxt.dialog[dialogNum]
console.log(actualdialogtxt)
nametxt = Object.keys(actualdialogtxt).find(key => key !== "display_image");
console.log(nametxt)
waitnoactualactualdialogtxt=actualdialogtxt[nametxt]
console.log(waitnoactualactualdialogtxt)
imgtxt=actualdialogtxt.display_image
console.log(imgtxt)
//console.log(Object.keys(dialogtxt['dialog'][dialogNum]))
}


// console.log(currentScene)
function story(){
//call all functions here for the seamless story
begin()
}
    