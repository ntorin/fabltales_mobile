let BASE_URL = 'https://api.fabltal.es'
let GET = 'GET'
let POST = 'POST'
let PUT = 'PUT'
let DELETE = 'DELETE'
let AUTH_URL = BASE_URL + "/auth"

var JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'access-token': '',
    'token-type': '',
    'client': '',
    'expiry': '',
    'uid': '',
}

let AUTH_POST = (email, password, password_confirmation, firstResponse) => {
    var body = JSON.stringify({
        email: email,
        password: password,
        password_confirmation: password_confirmation
    });

    return fetch(AUTH_URL,
        {
            method: POST,
            headers: JSON_HEADERS,
            body: body
        }
    ).then((response) => {
        firstResponse(response);
        return(response.json());
    });
}

let AUTH_POST_SIGNIN = (email, password, firstResponse) =>{
    var body = JSON.stringify({
        email: email,
        password: password
    });

    return fetch(AUTH_URL+'/sign_in',
        {
            method: POST,
            headers: JSON_HEADERS,
            body:body
        }
    ).then((response) =>{
        firstResponse(response);
        return(response.json());
    });
}

export {
    JSON_HEADERS,
    AUTH_POST,
    AUTH_POST_SIGNIN
}
