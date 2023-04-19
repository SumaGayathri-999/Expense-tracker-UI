// import { accessPercentages } from "./components/Graph";
export const getPercentage = (expenses) => {
    let total = 0;
    const categories_array = [];
    for(let i = 0; i < expenses.length; i++){
       total =total + expenses[i].amount
    }
    const unique=[];
   for(let j = 0 ; j < expenses.length; j++){
     if(unique.indexOf(expenses[j].type) === -1){
        unique.push(expenses[j].type);
     }
   }


// get the percentage of ecah one

   for (let i=0; i<unique.length; i++){
         
    let individual_sum = 0;
    let percent = 0;
    let color = "";
     for(let j=0; j < expenses.length; j++){
           if(unique[i] === expenses[j].type){
             individual_sum = individual_sum + expenses[j].amount
             color = expenses[j].color
           }
           percent = (individual_sum*100)/total;
           categories_array[i] = {"type" : unique[i],"color":color,"percentage":Math.round(percent)}
     }
   }
      return [categories_array,total];
}