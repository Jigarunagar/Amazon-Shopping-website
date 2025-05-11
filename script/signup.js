document.querySelector("#signupform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        fullname: document.getElementById("DataName").value,
        email: document.getElementById("DataEmail").value,
        number: document.getElementById("DataNumber").value,
        password: document.getElementById("DataPassword").value,
    };

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(user.fullname)) {
        alert("Name should contain only letters and spaces.");
        return;
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(user.number)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const passwordRegex = /^\d{8}$/;
    if (!passwordRegex.test(user.password)) {
        alert("Password must be exactly 8 digits.");
        return;
    }

    const res = await fetch("http://localhost:4880/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await res.json();

    if (res.status === 200) {
        alert(data.message);
        // ✅ Redirect to next page
        window.location.href = "index.html";
    } else {
        alert(data.message || "Signup failed");
    }

});


