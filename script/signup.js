document.querySelector("#signupform").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    fullname: document.getElementById("DataName").value,
    email: document.getElementById("DataEmail").value,
    number: document.getElementById("DataNumber").value,
    password: document.getElementById("DataPassword").value,
  };

  try {
    const response = await fetch("http://localhost:4808/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message); 
      e.target.reset();
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    alert("Network error, please try again");
    console.error(error);
  }
});
