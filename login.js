const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const password = form.password.value

    const authenticated = authentication(password)

    if(authenticated){
        window.location.href = "text.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(password){
    if(password === "Baby N"){
        return true
    }else{
        return false
    }
}