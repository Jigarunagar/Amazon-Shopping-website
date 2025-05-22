document.querySelector("#loginform").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value,
  };
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      window.location.href = "index.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Login request failed", error);
    alert("Something went wrong");
  }
});
