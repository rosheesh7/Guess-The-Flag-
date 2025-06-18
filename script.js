const allCountries = [
      { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
      { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
      { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
      { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
      { name: "India", flag: "https://flagcdn.com/w320/in.png" },
      { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
      { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
      { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
      { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
      { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
      { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
      { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
      { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
      { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
      { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
      { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
      { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
      { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
      { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
      { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
      { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
      { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
      { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
      { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
      { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    ];


let flagCount = 0;
let scoreCount = 0;
let correctFlagObject;

function showQuestion(count){
  document.querySelector(".result").style.display = "none";

  correctFlagObject = allCountries[count];
  document.querySelector(".js-question").innerHTML = `🌍 Which one is the flag of ${correctFlagObject.name}?`;
  document.querySelector(".js-score").innerHTML = `Score: ${scoreCount}`;

  //render flag
  let randomNum1,randomNum2;
  do{
   randomNum1 =Math.floor( Math.random() * allCountries.length );
  }while(allCountries[randomNum1].name === correctFlagObject.name);

  do{
    randomNum2 =Math.floor( Math.random() * allCountries.length );
  }while(allCountries[randomNum2].name === correctFlagObject.name ||
         allCountries[randomNum1].name === allCountries[randomNum2].name);

  let randomPlace = Math.random();
  if(randomPlace >= 0 && randomPlace < 1/3){
    document.querySelector(".flags").innerHTML = 
    ` 
      <img src = "${String(allCountries[randomNum1].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum1].name}','1');">
      <img src = "${String(allCountries[randomNum2].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum2].name}','2');">
      <img src = "${String(correctFlagObject.flag)}" style = "cursor: pointer;" onclick="checkAnswer('${correctFlagObject.name}','3');">      
      ` ;
  
  }
  else if(randomPlace >= 1/3 && randomPlace <2/3){
    document.querySelector(".flags").innerHTML =
      `
        <img src = "${String(allCountries[randomNum1].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum1].name}','1');" >
        <img src = "${String(correctFlagObject.flag)}"  style = "cursor: pointer;" onclick="checkAnswer('${correctFlagObject.name}','2');">
        <img src = "${String(allCountries[randomNum2].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum2].name}','3');"> 
      `;
  
  }
  else if(randomPlace >=2/3 && randomPlace <1) {
      document.querySelector(".flags").innerHTML =
      `
        <img src = "${String(correctFlagObject.flag)}" style = "cursor: pointer;" onclick="checkAnswer('${correctFlagObject.name}','1');">
        <img src = "${String(allCountries[randomNum1].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum1].name}','2');">
        <img src =  "${String(allCountries[randomNum2].flag)}" style = "cursor: pointer;" onclick="checkAnswer('${allCountries[randomNum2].name}','3');">
      `;
  }
}

let clickable = true;
function checkAnswer(flagName,button_no){
  if(!clickable) return;
  clickable = false;

  setTimeout(() => {
  
   if(String(flagName) ===  String(correctFlagObject.name)){
     scoreCount++;
    }
    flagCount++;
    if(flagCount >= allCountries.length){
      showScore();
      return;
    }
    showQuestion(flagCount);
    clickable = true;
  }, 300);
}

function showScore(){
  document.querySelector(".container").style.display = "none";
  document.querySelector(".result").innerHTML =  `
  <div class="end-message"> 
  <span>Quiz Over!</span>
  <br>
  <span>🎉 You scored ${scoreCount} / ${allCountries.length} 🎉 </span>
  </div> `;
  document.querySelector(".result").style.display = "block";
}


showQuestion(flagCount);







