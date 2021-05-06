const user = 'yehiakhaled922',
    domain = 'gmail.com',
    element = document.getElementById('email');

// element.innerHTML = `<a href="mailto: '${user} @ ${domain}'">Email</a>`;
element.addEventListener("click",()=>{
    element.innerHTML=`<a href="mailto: '${user} @ ${domain}'">Email</a>`
})
//OR
//'<a href="mailto:' + user + '@' + domain + '">Email</a>'
// const email_link =document.getElementsByClassName("email")

/*TODO counter visitors*/


