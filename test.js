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
const textpara= document.getElementById("textdisplay")
const namepara=document.getElementById("namedisplay")
const umapara=document.getElementById("uma")
const storyimg=document.getElementById("storyimg")

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
const next=document.getElementById("next")
next.disabled=true
start.addEventListener("click", story)
start.addEventListener("click",function(){start.disabled = true; next.disabled=false})
next.addEventListener("click",story)


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



async function begin(jsonfile){
await access(jsonfile)
textpara.textContent=waitnoactualactualdialogtxt
namepara.textContent=nametxt
storyimg.src=imgtxt
 if(dialogNum < dialogtxt.dialog.length - 1){
        dialogNum++;
    } else {
        choice("./beginning.json");
    }
}


async function choice(jsonfile){
    await access(jsonfile)
    console.log(nametxt)
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

async function access(jsonfile){

dialogtxt = await main(jsonfile);

console.log("dialogNum:", dialogNum);
    console.log("dialog length:", dialogtxt.dialog.length);
    console.log("actualdialogtxt:", dialogtxt.dialog[dialogNum]);


actualdialogtxt=dialogtxt.dialog[dialogNum]

if(!actualdialogtxt){
        console.log("out of bounds, stopping");
        return;}



nametxt = Object.keys(actualdialogtxt).find(key => key !== "display_image");
waitnoactualactualdialogtxt=actualdialogtxt[nametxt]
imgtxt=actualdialogtxt.display_image


//console.log(Object.keys(dialogtxt['dialog'][dialogNum]))
}


// console.log(currentScene)
async function story(){
//call all functions here for the seamless story
await begin("./beginning.json")

// await choice("./beginning.json")
}
