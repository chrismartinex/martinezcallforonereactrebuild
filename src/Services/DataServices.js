///say hello fetch
async function GetHello(name) {
  const response = await fetch(`https://allforonecmartinez.azurewebsites.net/Hola/Hello/${name}`);
  const data = await response.text();
  return data;
}


//add2numbers
async function GetNumbers(number1, number2) {
 const response = await fetch(
   `https://allforonecmartinez.azurewebsites.net/AddingNumbers/${number1}/${number2}`);
 const data = await response.text();
 return data;

}

//askingquestions
async function GetQuestions(name,time) {
 const response = await fetch(
  `https://allforonecmartinez.azurewebsites.net/AskQuestion/askme/${name}/${time}`
 );
 const data = await response.text();
 return data;
}

//greater than or less than
async function GetCompares(number1, number2) {
 const response = await fetch(
  `https://allforonecmartinez.azurewebsites.net/GreaterThanLess/compare/${number1}/${number2}`
 );
 const data = await response.text();
 return data;
}

//mad lib
async function GetMadLib(weather, day, time, natPark, celeb, name, superHero, country, dessert, beer) {
 const response = await fetch (
  `https://allforonecmartinez.azurewebsites.net/MadLib/MadLibStory/${weather}/${day}/${time}/${natPark}/${celeb}/${name}/${superHero}/${country}/${dessert}/${beer}`);
 const data = await response.text();
 return data;
}


//odd or even
async function GetOddEven(numeros) {
const response = await fetch(
  `https://allforonecmartinez.azurewebsites.net/OddEven/OddOrEven/${numeros}`
);
const data = await response.text()
return data;
}

//reverse it
async function GetReverseIt(wordsout) {
 const response = await fetch(
   `https://allforonecmartinez.azurewebsites.net/ReverseThis/Regress/"${wordsout}`
 );
 const data = await response.text();
 return data;
}

//student directory
async function GetStudents(fridayishere) {
 const response = await fetch(
   `https://allforonecmartinez.azurewebsites.net/StudentDirectory/GetStudentByFirstName/${fridayishere}`
 );
 const data = await response.text();
 return data;
}

//restaurant Picker 
async function GetRestaurant (foodkinds) {
  const response = await fetch(
    `https://allforonecmartinez.azurewebsites.net/Respicker/Select/mexican/${foodkinds}`
  );
  const data = await response.text;
  return data;
}



export { GetHello, GetNumbers, GetQuestions, GetCompares, GetMadLib, GetOddEven, GetReverseIt, GetStudents, GetRestaurant};
