document.querySelector("#loginform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value,
    };

    const res = await fetch("http://localhost:4880/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await res.json();
    if (data.message === "Login successful") {
        alert("Login successful!");
        window.location.href = "index.html";  // ✅ redirect to dashboard
    } else {
        alert(data.message);
    }
});