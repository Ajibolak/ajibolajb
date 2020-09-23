var beginningScenarios = ["You wake up in a hospital. it is eerily quiet. you tiptoe to th door and peek out.", "you are standing in an open fild west of a white house with a boarded front door. there is a small mailbox here.", "despite  times call for desperate measures.  you see a small convinienc store up aheead and decide to loot it for goods." ];

function randomNumber(range){
    Math.round(Math.random()*range);
}

alert(beginningScenarios[randomNumber(beginnigScenarios.length-1)])

var weaponList=["shovel", "crossbow", "baseball bat", "rubber chicken"];

var weapon = weaponList[randomNumber(weaponList.length-1)];

alert("being that it is a zombie apocalypse, you decide to search for a weapon first, after surveying your surroundings, you notice and grab a" + weapon + ".")