$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = "<h3>" + nameLength(userName) + "</h3>";
  coolFacts += "<h3>" + nameStart(userName) + "</h3>";
  coolFacts += "<h3>" + nameEnd(userName) + "</h3>";
  coolFacts += "<h3>" + reverseName(userName) + "</h3>";
  coolFacts += "<h3>" + spiritAnimal(userName) + "</h3>";
 

  console.log("initialized the coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "The last letter of your name is " + name[lastIndex]
}

function reverseName(name) {
  
  let arrName = name.split(""); 

  revName = arrName.reverse();
  
  revName = revName.join("");
  
  return "Your name backwards is " + revName
     
}

function spiritAnimal(name){
  if (name.length = 1){
    return "Your spirit animal is a goose!";
  }
  if (name.length = 2){
    return "Your spirit animal is a badger!";
  }
  if (name.length = 3){
    return "Your spirit animal is an otter!";
  }
  if (name.length = 4){
    return "Your spirit animal is a seagull!";
  }
  if (name.length = 5){
    return "Your spirit animal is a salmon!";
  }
  if (name.length = 6){
    return "Your spirit animal is a goat";
  }
  if (name.length = 7){
    return "Your spirit animal is a deer!";
  }
  if (name.length >= 8){
    return "Your spirit animal is a moose!";
  }
}
