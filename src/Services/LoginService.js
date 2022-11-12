import axios from 'axios'

export class LoginService {
    static serverURL = 'https://appservicejwttoken.azurewebsites.net/api'

    static getAllUsers () {
      const dataURL = `${this.serverURL}/user/getallusers`
      return axios.get(dataURL, {
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('token')
        }
      })
    }

    static createUser (signupDetails) {
      const dataURL = `${this.serverURL}/Login/CreateUser`
      return axios.post(dataURL, signupDetails)
    }

    static signInUser (signinDetails) {
      const dataURL = `${this.serverURL}/Login/signin`
      return axios.post(dataURL, signinDetails)
    }
}

/*

, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Accept,authorization,Authorization, Content-Type'
        }
      }

, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
      }
// function parseJwt (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
// }

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc3dhMUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiMjMyMzIzIiwibmJmIjoxNjY4MTM3NDk5LCJleHAiOjE2NjgyMjM4OTksImlhdCI6MTY2ODEzNzQ5OX0.VUQYyXpkmQQUARdhB9Uor5QRuTygUcY6VrIXLsoYWzo"
console.log(parseJwt(token))

  */
