// simpleSi & compoundCi-page

let simpleSi=document.querySelector(".emi-formsi")
let compoundCi=document.querySelector(".compondintrestpage")

let formci=document.querySelector(".formci")


let compound_btn=document.querySelector(".compound-interest")
let simple_btn=document.querySelector(".simple-intrest")


let form = document.querySelector(".emi-formsi");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let princepal = Number(document.querySelector(".princepalsi").value);
  let interest = Number(document.querySelector(".interestsi").value);
  let duration = Number(document.querySelector(".durationsi").value);

  // simple-Intrest
  let si = (princepal / 100) * interest * duration;
  let yearlyamount=princepal+si/duration
  let monthly=Math.round(yearlyamount/12)

  document.querySelector(".PrincipalAmountviewsi").innerHTML = `${princepal}₹`
  document.querySelector(".interestamountviewsi").innerHTML = `${si}₹`
    document.querySelector(".monthamountviewsi").innerHTML=`${monthly}₹`
  document.querySelector(".TotalPayableviewsi").innerHTML = `${princepal + si}₹`;
});





// simplepage

simple_btn.addEventListener("click",()=>{
  simpleSi.style.display="block"
  compoundCi.style.display="none"
})

// Compound

compound_btn.addEventListener("click",()=>{
  simpleSi.style.display="none"
  compoundCi.style.display="block"
})


formci.addEventListener("click",(e)=>{
  e.preventDefault()
  let princepal = Number(document.querySelector(".princepalci").value);
  let interest = Number(document.querySelector(".interestci").value);
  let duration = Number(document.querySelector(".durationci").value);

  let A = princepal * Math.pow((1 + interest / 100), duration)
  let ci= Math.round(A-princepal)
  console.log(ci);
  

  document.querySelector(".PrincipalAmountviewci").innerHTML = `${princepal}₹`
  document.querySelector(".interestamountviewci").innerHTML = `${ci}₹`
  document.querySelector(".TotalPayableviewci").innerHTML = `${princepal + ci}₹`;

})



