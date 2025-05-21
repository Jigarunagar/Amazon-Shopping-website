document.querySelector("#signupform").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    fullname: document.getElementById("DataName").value,
    email: document.getElementById("DataEmail").value,
    number: document.getElementById("DataNumber").value,
    password: document.getElementById("DataPassword").value,
  };

});
