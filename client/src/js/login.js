const loginForm = document.getElementById("login-form");

const sendData = async function (email, password) {
    const data = {
        email,
        password,
    };
    const response = await fetch("http://localhost:8000/driver/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        console.log(response);
    });
};

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    // sendData(email, password);
});
