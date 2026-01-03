let form = document.querySelector(".emi-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let princepal = Number(document.querySelector(".princepal").value);
  let interest = Number(document.querySelector(".interest").value);
  let duration = Number(document.querySelector(".duration").value);

  let si = (princepal / 100) * interest * duration;

  document.querySelector(".PrincipalAmountview").innerHTML = princepal;
  document.querySelector(".interestamountview").innerHTML = si;
  document.querySelector(".TotalPayableview").innerHTML = princepal + si;
});
