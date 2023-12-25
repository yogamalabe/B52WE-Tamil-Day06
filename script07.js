var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   // a) Get all the countries from the Asia continent /region using the Filter functiona) 
    var reg=result.filter((ele)=>ele.region==='Asia');
    console.log(reg);

    // b) Get all the countries with a population of less than 2 lakhs using Filter function
      var pop=result.filter((ele)=>ele.population<200000);
      console.log(pop);
    
    //c)Print the following details name, capital, flag using forEach function
        result.forEach(element => {
            console.log(element.name);
            console.log(element.capital);
            console.log(element.flag);
           });
    
    //D) Print the total population of countries using reduce function
       var totalpop=result.reduce((a,b)=>a+b.population,0);
       console.log(totalpop);

  //E)Print the country which uses US Dollars as currency
    console.log(
        result.filter((cty)=>{
            const { currencies = {} } = cty;
            return Object.keys(currencies).includes("USD");
        })
);
}

