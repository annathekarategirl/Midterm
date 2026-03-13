async function fetchJSONData(path) {
    const response = await fetch(path);
    console.log(response)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

var current
function updatedebug(){
document.getElementById("p1").textContent=current
console.log(current)

}
//https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
document.addEventListener("keydown", function(keystrokething){
    if(keystrokething.code==="Space"){
        next.click();
    }
});
document.addEventListener("keydown", function(keystrokething){
    if(keystrokething.code==="KeyG"){
        next.click();
    }
});
document.addEventListener("keydown", function(keystrokething){
    if(keystrokething.code==="KeyY"){
        mouseimg.mouseover();
    }
});

let dialogNum = 0;
let jsonobject
let nametxt
let imgtxt
let dialogindex;
let currentdialog;
const textpara= document.getElementById("textdisplay")
const namepara=document.getElementById("namedisplay")
const umapara=document.getElementById("uma")
const storyimg=document.getElementById("storyimg")
const choicebtn1=document.getElementById("choice1")
const choicebtn2=document.getElementById("choice2")
const choicebtn3=document.getElementById("choice3")
let jsonchoice="beginning.json"
const submitinput=document.getElementById("submitinput")
const secretinput=document.getElementById("secretinput")

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
    return data
}


const start =document.getElementById("start")
const next=document.getElementById("next")
next.disabled=true
start.addEventListener("click", function(){
    start.disabled = true;
    start.style="display:none"
    next.disabled = false;
    next.onclick = function(){ begin("./beginning.json") };
    begin("./beginning.json"); // show first line immediately on start
});


//https://www.w3schools.com/jsref/jsref_promise_then.asp

ordernum=0
async function begin(jsonfile){
await access(jsonfile)
choicebtn1.style="display:none"
choicebtn2.style="display:none"
textpara.textContent=currentdialog
namepara.textContent=nametxt
storyimg.src=imgtxt
console.log(jsonchoice)
console.log(jsonobject)
 if(dialogNum < jsonobject.dialog.length - 1){
        dialogNum++;
        
    } else {
        if(jsonobject.choice_scenes){
            next.onclick=callchoice
        }
        else{
        console.log("test")
        ending()
    }
        return
    }
}

async function choice(jsonfile){
    try{
    await access(jsonfile)}
    catch(error){
        umapara.textContent="json file not found"
        console.log("file not found")
    }
 
    console.log(nametxt)
    choicescenes=jsonobject.choice_scenes
    //add choice buttons then event listeners for each choice
  
    choice1=choicescenes[0]
    choice2=choicescenes[1]

    choicebtn1.style="display:block"
    choicebtn2.style="display:block"
    choicebtn1.textContent=choice1.text
    choicebtn2.textContent=choice2.text
    console.log(jsonchoice)
    if (jsonfile=="ofcourse.json"){
        choicebtn3.style="display:block"
        choice3=choicescenes[2]
        console.log(choice3)
        choicebtn3.textContent=choice3.text
        choicebtn3.addEventListener("click",choice3func)
    }
    choicebtn1.addEventListener("click", choice1func)

    choicebtn2.addEventListener("click",choice2func)
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

async function access(jsonfile){

jsonobject = await main(jsonfile);
current=jsonfile
console.log("dialogNum:", dialogNum);
    console.log("dialog length:", jsonobject.dialog.length);
    console.log("dialogindex:", jsonobject.dialog[dialogNum]);


dialogindex=jsonobject.dialog[dialogNum]

if(!dialogindex){
        console.log("out of bounds, stopping");
        return;}



nametxt = Object.keys(dialogindex).find(key => key !== "display_image");
currentdialog=dialogindex[nametxt]
imgtxt=dialogindex.display_image

}



async function story(){
await begin("./beginning.json")

}


//stuff for eventlisteners to add and remove

async function callchoice(){
    console.log(jsonchoice)
    await choice(jsonchoice)
}


function choice1func(){
    dialogNum = 0;
    jsonchoice = choice1.file;
    choicebtn1.style = "display:none";
    choicebtn2.style ="display:none";
    choicebtn3.style="display:none";
    next.onclick = function(){ begin(choice1.file) };
}

function choice2func(){
    dialogNum = 0;
    jsonchoice = choice2.file;
    choicebtn1.style= "display:none";
    choicebtn2.style ="display:none";
    choicebtn3.style="display:none";
    next.onclick = function(){ begin(choice2.file) };
   
}

function choice3func(){
    dialogNum = 0;
    jsonchoice = choice3.file;
    choicebtn1.style = "display:none";
    choicebtn2.style = "display:none";
    choicebtn3.style="display:none";
    next.onclick = function(){ begin(choice3.file) };}

const arblink=document.getElementById("arbitrary")
function ending(){
    next.style="display:none"
    switch(jsonchoice){
        case("pet_cat.json"):
            secretinput.style="display:block"
            submitinput.style="display:block"
            console.log("it works!")
            submitinput.addEventListener("click",function(){
                end=secretinput.value
                umapara.textContent="ENDING: "+end
                storyimg.src="orange.jpg"
                
            })
            break;
        case("goaway.json"):
        umapara.textContent="No one claimed the heart of the single uma. Instead, they claimed each others hearts."
        break;
        case("bea_confess.json"):
        umapara.textContent="Beatrice claimed the heart of the single uma!"
        break;
        case("bea_no_confess.json"):
        umapara.textContent="No one claimed the heart of the single uma"
        break;
        case("kat_confess.json"):
        umapara.textContent="Kat claimed the heart of the single uma!"
        break;
        case("kat_friends.json"):
        umapara.textContent="No one claimed the heart of the single uma"
        break;
        case("mean_bea.json"):
        umapara.textContent="You are so mean bro stopp"
        break;
        case("mean_kat.json"):
        umapara.textContent="It gets to a point dawg"
        break;

    }
    arblink.textContent="\nYou unlocked arbitrary button land!!!"
}

const silly=document.getElementById("silly")



let sillyArr=[];
//https://www.geeksforgeeks.org/javascript/add-elements-to-a-javascript-array/
for(let i= 0;i<2;i++){
    if(i== 0){
        sillyArr.push("orange.jpg");
    }else {
        sillyArr.push("")}
}

let sillyI = 0;
setInterval(function(){
    silly.src=sillyArr[sillyI];
    sillyI++;
    if(sillyI>=sillyArr.length){
        sillyI= 0}
}, 700);

const mouseimg =document.getElementById("mouseimg")
mouseimg.addEventListener("mouseover",function(){mouseimg.src="orange.jpg"})
mouseimg.addEventListener("mouseleave",function(){mouseimg.src="kokichi.jpg"})
mouseimg.addEventListener("click",function(){mouseimg.style="display:block"})

//https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
document.getElementById("refresh").addEventListener("click",function(){location.reload()})


//If it works it works right? :')