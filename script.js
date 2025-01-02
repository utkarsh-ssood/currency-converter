const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"


const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for (select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name==="from"&&currCode==="USD")
        {
            newOption.selected="selected";
        }
        if(select.name==="to"&&currCode==="INR")
        {
            newOption.selected="selected";
        }
        // console.log(code,countryList[code]);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let currCode=element.value;
    // console.log(element);
    // console.log(currCode);
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src=newSrc;
    
}



btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    // console.log(amtVal);
    if(amtVal===""||amtVal<1)
    {
        amtVal=1;
        amount.value="1";
    }
    

    const URL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
    // let val=data.(fromCurr.value.toLowerCase())[toCurr.value.toLowerCase()];
    let fv=fromCurr.value.toLowerCase();
    let tv=toCurr.value.toLowerCase();
    let val=data[fv][tv];
    console.log(val);

    msg.innerText=`${amtVal} ${fromCurr.value}  =  ${amtVal*val} ${toCurr.value}`
    
    
    

});
