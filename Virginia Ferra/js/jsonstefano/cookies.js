function checkCookieAccept(){
    if(localStorage.checkCookieAccept=='true'){
        cajacookies.style.display = 'none';
    }
}

function acceptCookies(){
    localStorage.checkCookieAccept = 'true';
    cajacookies.style.display = 'none';
}

$(document).ready(function(){
    checkCookieAccept();
});