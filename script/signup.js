document.querySelector("#signupform").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    fullname: document.getElementById("DataName").value,
    email: document.getElementById("DataEmail").value,
    number: document.getElementById("DataNumber").value,
    password: document.getElementById("DataPassword").value,
  };

  const res = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const result = await res.json();
  alert(`${result} data`);
});
