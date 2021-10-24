

         var bf =[[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

var game = {
  linkor: 1,
  cruisers: 2,
  destroyers: 3,
  submarines: 4
}
function validator(bf){
  var oldBf = bf.flat();
  for(var i = 0; i < bf.length; i++){
    for(var j = 0; j < bf.length; j++){
      var ship;
      if(bf[i][j] == 1){
         ship = findAShip()(i,j);
         if(ship == 1){game.submarines -= 1}else if(ship == 2){game.destroyers -= 1}else if(ship == 3){game.cruisers -= 1}else if(ship == 4){game.linkor -= 1};
      }
    }
  }var old = oldBf.filter(function(elem){return elem ==1?true:false}); var newBf= bf.flat();newBf = bf.flat().filter(elem=>elem==2?true:false);return (newBf.length == old.length && Object.values(game).every((elem)=>elem==0?true:false))?true:false
}

function findAShip(){
  var counter =  1;
return function(i,j){
  bf[i][j] = 2;
  if(bf?.[i+1]?.[j] == 1){
    if((bf?.[i]?.[j+1]) != undefined){bf[i][j+1] = 3};
    if(bf?.[i]?.[j-1] != undefined){bf[i][j-1] = 3};
    i++
    while(bf?.[i]?.[j] == 1){bf[i][j] = 2;if(bf?.[i]?.[j+1]  != undefined){bf[i][j+1] = 3};if(bf?.[i]?.[j-1] != undefined){bf[i][j-1] = 3}; i++; counter++};
    if(bf?.[i]?.[j] != undefined){if((bf?.[i]?.[j+1]) != undefined){bf[i][j+1] = 3};
    if((bf?.[i]?.[j]) != undefined){bf[i][j] = 3};
    if((bf?.[i]?.[j+1]) != undefined){bf[i+1][j+1] = 3};
    if((bf?.[i]?.[j-1]) != undefined){bf[i+1][j-1] = 3}};
  }else if(bf?.[i]?.[j+1] == 1){
    if(bf?.[i+1]?.[j+1] != undefined){bf[i+1][j+1] = 3};
    if(bf?.[i-1]?.[j+1] != undefined){bf[i-1][j+1] = 3};
    j++
    while(bf?.[i]?.[j] == 1){bf[i][j] = 2;if(bf?.[i-1]?.[j] != undefined){bf[i-1][j] = 3};if(bf?.[i+1]?.[j] != undefined){bf[i+1][j] = 3}; j++; counter++};
    if(bf?.[i]?.[j] != undefined){
    if((bf?.[i]?.[j]) != undefined){bf[i][j] = 3};
    if((bf?.[i+1]?.[j]) != undefined){bf[i+1][j] = 3};
    if((bf?.[i-1]?.[j]) != undefined){bf[i-1][j] = 3}};
  }else if(bf[i][j+1] != 1 && bf[i+1][j] !== 1){
    if((bf?.[i]?.[j+1]) != undefined){bf[i][j+1] = 3};
    if((bf?.[i]?.[j-1]) != undefined){bf[i][j-1] = 3};
    if((bf?.[i+1]?.[j+1]) != undefined){bf[i+1][j+1] = 3};
    if((bf?.[i+1]?.[j-1]) != undefined){bf[i+1][j-1] = 3};
    if((bf?.[i+1]?.[j]) != undefined){bf[i+1][j] = 3};
    if((bf?.[i-1]?.[j+1]) != undefined){bf[i-1][j+1] = 3};
    if((bf?.[i-1]?.[j-1]) != undefined){bf[i-1][j-1] = 3};
    if((bf?.[i-1]?.[j]) != undefined){bf[i-1][j] = 3;}
  }


  return counter}
}

console.log(validator(bf))
