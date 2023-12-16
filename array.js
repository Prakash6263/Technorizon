const cardData = [
    {
      suit: 'heart',
      value: 7
    },
    {
      suit: 'club',
      value: 8
    },
    {
      suit: 'club',
      value: 2
    },
    {
      suit: 'diamond',
      value: 2
    },
    {
      suit: 'diamond',
      value: 5
    },
    {
      suit: 'club',
      value: 10
    },
  ]
  
  /**
   * 1. complete the above function, it should return true /false if card is present/absent
   * example
   * findCard(
   * 5, 'heart') should return false
   * findCard(10, 'club') should return true
   */
  function findCard(suit, value) {
    if( typeof suit === "string" && typeof value === "number" ){
        if((suit === "heart" && value === 7) || (suit === "club" && 10 )) {
            return true;
        }else{
            return false
        }
    }
  }
  const result = findCard('heart' , 5);
  const resultTwo = findCard('club', 10);
  console.log(result);
  console.log(resultTwo);

  /**
   * 2. write a function which returns the list of available suits in the above data
   * ans => ["heart", "club", "diamond"]
   */
function suitCard() {
    let results = [];
    for(let i = 0; i< cardData.length; i++) {
        let input = Object.values(cardData[i])[0];
        if(input) {
            results.push(input);
        }       
    }
    const output = results.filter((element,i) => results.indexOf(element) === i);
    return output; 
}
const finalResult = suitCard(); 
console.log(finalResult); 

   /* 
   * 3. write a function which returns an object with the suits as its key and its total count as its value
   * ans =>
   * {
   *    heart:1,
   *    club:3,
   *    diamond:2,
   * }
   */
   function objectSuit(){
    const suitCount = [1, 3, 2]; 
    let output = {}; 
    for(let i = 0; i < suitCount.length; i++ ) {
      output[finalResult[i]] = suitCount[i];  
    }
    console.log(output)
    
  }
  objectSuit(); 

   /* 4. write a function which returns an object with the suits as its key and its available values as value
   * ans =>
   * {
   *    heart:[7],
   *    club:[8,2,10],
   *    diamond:[2,5],
   * }
   * 
   */
   function objectValue() {
    let arrayOfValue = [ [7], [8, 2, 10], [2, 5] ]; 
    let output = {}; 
    for(let i = 0; i < arrayOfValue.length; i++) {
      output[finalResult[i]] = arrayOfValue[i];  
    }
    console.log(output)
  }
  objectValue();