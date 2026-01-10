// simpleSi & compoundCi-page

let simpleSi=document.querySelector(".emi-formsi")
let compoundCi=document.querySelector(".compondintrestpage")


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

  document.querySelector(".PrincipalAmountviewsi").innerHTML = `${princepal}₹`
  document.querySelector(".interestamountviewsi").innerHTML = `${si}₹`
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



