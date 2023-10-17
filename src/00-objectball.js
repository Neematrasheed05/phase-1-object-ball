function gameObject (){
   return {
    home:{
    teamName:"Brooklyn Nets",
    colors : ['Black', 'White'],
    players:{
        "Alan Anderson":{ 
        number:0,
        shoe:16,
        points:22,
        rebounds:12,
        assists:12,
        steals:3,
        blocks:1,
        slamDunks:1
    },
    "Reggie Evans":{
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7
    },
    "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15
    },
    "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1
    }

    }

   },
   away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12
      }
    }
   }
   };
}
//const gameData = gameObject();
//console.log(gameData);
function homeTeamName (){
    return gameObject()['home']['teamName']
}
console.log(homeTeamName())
let oo = gameObject();
console.log("object.keys(oo)=>", Object.keys(oo));
console.log("object.values(oo)=>", Object.values(oo));
console.log("object.entries(oo)=>", Object.entries(oo));
 //let Name = oo.home.players["Alan Anderson"]["points"];
 //console.log(Name)
function numberPointsScored(playerName){
    let oo = gameObject();
    if(playerName in oo.home.players){
        return oo.home.players[playerName].points;
    }
    if(playerName in oo.away.players){
        return oo.away.players[playerName].points;
    }
}
const playerName = "Alan Anderson";
const pointScored = numberPointsScored(playerName);
console.log(`${playerName} scored ${pointScored} points.`);

function shoeSize (PlName){
    let x = gameObject();
    if(PlName in x.home.players){
        return x.home.players[PlName].shoe;
    }
    if(PlName in x.away.players){
        return x.away.players[PlName].shoe;
    }
}
const PlName = "Brendan Haywood";
const size = shoeSize(PlName);
console.log(`${PlName}: shoe size is:${size}.`);


//let y = gameObject()
//let TeamColor = y.home.colors
//console.log(TeamColor)

function teamColor (teamName){
    let y = gameObject();
    if(teamName === y.home.teamName){
        return y.home.colors;
    }
    if(teamName === y.away.teamName){
        return y.away.colors;
    }
    return "color not found!"
}
const teamName = "Brooklyn Nets";
const colors = teamColor(teamName);
console.log(`${teamName}'s color are: ${colors}.`);
 

//let z = gameObject();
//let a = z.away.teamName
//console.log(a);

function TeamName (){
    let object = gameObject();

        return [object.home.teamName, object.away.teamName];
}
console.log(TeamName());
//let i = gameObject()
//let verse = i.home.players["Alan Anderson"].number
//console.log(verse)
function playerNumbers (){
    const c = gameObject();
    const jersy = [];
    for(const player in c.home.players){
        const playerNm = player;
        const jNumber = c.home.players[playerNm].number;
        jersy.push({playerNm, jNumber});
    }
    for(const player in c.away.players){
        const playerNm = player;
        const jNumber = c.away.players[playerNm].number;
        jersy.push({playerNm, jNumber});
    }
    return jersy;
}
const y = playerNumbers();
console.log(`All Jersy numbers:`);
for(const allData of y){
    console.log(`${allData.playerNm} jersy Number is: ${allData.jNumber}`);
}
//let cat = gameObject();
//let combo = cat.home.players["Alan Anderson"];
//console.log(combo);

function playerStats (Pname){
    let cat = gameObject();
    if(Pname in cat.home.players){
        return cat.home.players[Pname];
    }
    if (Pname in cat.away.players){
        return cat.away.players[Pname];
    }
}
const Pname = "DeSagna Diop";
const Status = playerStats(Pname);
console.log(`${Pname}'s Attributes are:`);
console.log(Status);




















 /*function getAllPointsScored (){
  const oo = gameObject();
  const allPoints = [];

  for(const player in oo.home.players){
    const playerName = player;
    const points = oo.home.players[player].points;
    allPoints.push({playerName, points})
  }

  for(const player in oo.away.players){
    const playerName = player;
    const points = oo.away.players[player].points;
    allPoints.push({playerName, points});
  }
  return allPoints;
 }
 const allPoints = getAllPointsScored();
  console.log("points scored by all players:");
  for (const playerData of allPoints){
    console.log(`${playerData.playerName}: ${playerData.points} points`);
  }*/