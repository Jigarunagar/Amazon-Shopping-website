document.querySelector("#signupform").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("DataName").value;
  const email = document.getElementById("DataEmail").value;
  const number = document.getElementById("DataNumber").value;
  const password = document.getElementById("DataPassword").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^\d{10}$/;
  const passwordRegex = /^\d{8}$/;

  if (!nameRegex.test(fullname)) {
    alert("only letters and spaces.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!numberRegex.test(number)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }
  if (!passwordRegex.test(password)) {
    alert("Password must be exactly 8 digits Number");
    return;
  }

  const user = {
    fullname,
    email,
    number,
    password,
  };

  console.log(user);

  const res = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const result = await res.json();
  alert(result.message);

  if (result.message == "Signup successful!") {
    window.location.href = "index.html";
  }
});
