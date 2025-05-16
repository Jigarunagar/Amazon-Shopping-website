document.querySelector("#loginform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value,
    };

});