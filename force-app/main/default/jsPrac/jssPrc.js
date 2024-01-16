console.log("player");
const game = {
    team1 : "India",
    team2 : "Aus",
    player : [
        [
            "Dhoni","Virat"
        ],
        [
            "Wade", "Chain"
        ]
    ],
    Century : ["kohhli", "chain"],
    odds: {
        team1: 1.33,
        x: 3.33,
        team2: 6.5
    },
};

let [player1,player2]  = game.player;
console.log("player" , player1);

let [wicketKeeper, ...fieldplayer] = player1;
console.log("wicketKeeper" , wicketKeeper );
console.log("fieldplayer" , fieldplayer );

let oldPlayers = [...player1 , ...player2];
console.log("oldPlayers" , oldPlayers);

let players1Final = [...player1 , 'Sandeep', 'John','Sunil'];
console.log("players1Final" , players1Final);

let {team1 , x , team2} = game.odds;
console.log("team1" , team1);
  
for(let cenn in game.Century){
    console.log("Century " , `${cenn+1}  : ` +  game.Century[cenn]);
}

for(let [index,cenn] of game.Century.entries()){
    console.log("Century " , index + 1 + ' :' + cenn);
}

let addAllOdd = 0;
for(let cenn of Object.values(game.odds)){
    addAllOdd = addAllOdd + cenn;
    console.log("Century " , addAllOdd );
}




const connn = (inputStr) =>{
   let myStr =  inputStr.split(" ");
   myStr.forEach((curritem) => {
    console.log("curritem " , curritem[0].toUpperCase() + curritem.slice(1) );
   })
    console.log("myStr " , myStr );
}




connn("hey there");

function handleChange(event){
    console.log('hey ' , event.target.value);
}


// fetch accept two param URL , OPTION
// return promise 
// reponse is not in readable form to make it readable form then use .json()
// again use .then to get data in readable form
// default method is get()
let loadRandomUsers = () =>{
    fetch("https://reqres.in/api/users" , {
        method: "GET",
    }).then((response) => response.json())
    .then((data) => console.log(data) );
}

loadRandomUsers();

// CAT API
let caturl;
let catwidth;
let catheight;

async function loadRandomCat(){
    let getRespose = await fetch("https://api.thecatapi.com/v1/images/search");
    let getData = await getRespose.json();
    let data = await getData;
    console.log("data " , data);

    for(let CatData of data){
        caturl = CatData.url;
        catwidth = CatData.width;
        catheight = CatData.height;
        console.log("caturl " , caturl);
    }
    let putSrc =  document.querySelector(".caty");
    putSrc.src = caturl;
    putSrc.width = catwidth;
    putSrc.height = catheight;
}

loadRandomCat();

const x= 10 ;
if(x= 5){
    console.log("if ");
}else{
    console.log("else ");
}
