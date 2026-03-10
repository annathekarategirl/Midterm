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
async function main(string) {
    const data = await fetchJSONData(string);
    //console.log(data);
    //console.log(Object.keys(data['dialog'][dialogNum]));
}

//main('./ofcourse.json');
const start =document.getElementById("start")
start.addEventListener("click", story)

const beginning=main("./beginning.json")
console.log(beginning)
function begin(){

}






function story(){
//call all functions here for the seamless story
console.log("WOW!!!!!!!!")
}