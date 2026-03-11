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
const choicebtn1=document.getElementById("choice1")
const choicebtn2=document.getElementById("choice2")
const choicebtn3=document.getElementById("choice3")


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

order=["./beginning.json","./ofcourse.json","goaway.json"]
ordernum=0
async function begin(jsonfile){
await access(jsonfile)
textpara.textContent=waitnoactualactualdialogtxt
namepara.textContent=nametxt
storyimg.src=imgtxt
 if(dialogNum < dialogtxt.dialog.length - 1){
        dialogNum++;
    } else {
        //choice("./beginning.json");
        //dialogNum=0
        //begin("./ofcourse.json")
        next.removeEventListener("click",story)
        next.addEventListener("click",function(){choice(order[ordernum])})
        
        return
    }
}
//FOR LOOP THAT LOOPS BEGIN AND OF COURSE AND SO ON LIST OF THE BEGIN FUNCTION????? JUST A TEsST?????
//CHOICE IF ELSE CALLS BEGIN FUNC ON DIFFERENTTHING BUT HOW TO DO SPECIFICS MAYBE LIKE IF jsonfile IS beggining then these buttons mean this and yeah

async function choice(jsonfile){
    await access(jsonfile)
    next.addEventListener("click",choice)
    console.log(nametxt)
    choicescenes=dialogtxt.choice_scenes
    //add choice buttons then event listeners for each choice
    //how to access?
    choice1=choicescenes[0]
    choice2=choicescenes[1]
    // console.log(choicescenes)
    // console.log(choice1.file)
    // console.log(choice2.text)
    choicebtn1.class=""
    choicebtn2.class=""
    choicebtn1.textContent=choice1.text
    choicebtn2.textContent=choice2.text
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
