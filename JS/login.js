"use strict";

let form = document.querySelector("form");
let inputUsername = document.querySelector(".username");
let inputPassword = document.querySelector(".password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: inputUsername.value,
                password: inputPassword.value
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.token) {
                window.localStorage.setItem("token", JSON.stringify(data.token));
                window.location.replace("index.html");
            } else {
                alert("Xatolik!");
            }
        });
});

