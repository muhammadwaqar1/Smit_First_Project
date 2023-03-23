let fullName = "Muhammad Waqar"
let email = "admin@user.com"
let password = "123456"
const login = () => {
    var a = document.getElementById("fullName").value
    var b = document.getElementById("email").value
    var c = document.getElementById("password").value
    if (!a || !b || !c) {
        let a = "Please fill all input filled"
        Tost(a)
    }
    else if (a.length < 3) {
        let a = "Your name is short"
        Tost(a)

    }
    else if (b !== email) {
        let a = "Email is incorrect"
        Tost(a)
    }
    else if (c !== password) {
        let a = "Password is incorrect"
        Tost(a)
    }
    else if (email == b && password == c) {
        let a = "Successfull login"
        Tost(a)
        window.location.href = "home.html"
    }
    else {
       
    }

}
document.getElementById("namee").innerHTML = fullName

let a = ["Faisalabad", "Karachi", "Lahore"]

function addCity() {
    document.getElementById("result").innerHTML = " "
    let city = document.getElementById("valuee").value
    if (!city) {
        let a = "Please Provied your good city name"
        Tost(a)
        return;
    }
    else if (city.length < 3) {
        let a = "Your Name is short"
        Tost(a)
        return;
    }
    else {
        Lower = city.toLowerCase();
        let firstvalue = Lower.charAt(0).toUpperCase();
        let finalvalue = firstvalue + Lower.substr(1);
        for (let i = 0; i < a.length; i++) {
            if (finalvalue == a[i]) {
                return document.getElementById("result").innerHTML = '<span style="color:blue; font-weight : bold">' + '"' + finalvalue + '"' + '</span>' + ' is already in the list';

            }
        }
    }
    a.push(city)
    let c = "city is added successfuly in list"
    Tost(c)
}

function printCity() {
    for (let i = 0; i < a.length; i++) {
        document.getElementById("result").innerHTML += `${i}) ${a[i]} <br>`
    }
}

function Tost(b) {
    Toastify({
        text: b,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function cleartOutput() {
    document.getElementById("result").innerHTML = ""
}