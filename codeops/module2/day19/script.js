
// function validatePasswordFormat(password) {

//   const minLength = 8;
//   const hasUpperCase = /[A-Z]/.test(password);
//   const hasLowerCase = /[a-z]/.test(password);
//   const hasNumbers = /\d/.test(password);

//   if (password.length < minLength) {
//     return { valid: false, message: "Password must be at least 8 characters long." };
//   }
//   if (!hasUpperCase || !hasLowerCase) {
//     return { valid: false, message: "Password must contain both upper and lower case letters." };
//   }
//   if (!hasNumbers) {
//     return { valid: false, message: "Password must contain at least one number." };
//   }

//   return { valid: true, message: "" };
// }


// async function authenticateUser(username, password) {
//   const response = await fetch('/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ username, password })
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Authentication failed. Please check your credentials.');
//   }

//   return data; 
// }


// const loginForm = document.querySelector('#loginForm');
// const errorDisplay = document.querySelector('#errorMessage');
// const submitBtn = document.querySelector('#submitBtn');

// loginForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); 


//   errorDisplay.style.display = 'none';
//   errorDisplay.textContent = '';

//   const username = loginForm.username.value.trim();
//   const password = loginForm.password.value;


//   const validation = validatePasswordFormat(password);
//   if (!validation.valid) {
//     showError(validation.message);
//     return;
//   }


//   try {
//     submitBtn.disabled = true;
//     submitBtn.textContent = 'Logging in...';

//     const result = await authenticateUser(username, password);


//     localStorage.setItem('authToken', result.token);
//     window.location.href = '/dashboard';

//   } catch (err) {
//     showError(err.message);
//   } finally {
//     submitBtn.disabled = false;
//     submitBtn.textContent = 'Log In';
//   }
// });

// function showError(msg) {
//   errorDisplay.textContent = msg;
//   errorDisplay.style.display = 'block';
// }

// console.log(document.getElementsByClassName("header"));
// console.log(document.getElementById("one"));
// let collection=document.getElementsByClassName("header");
// document.getElementById("btn").addEventListener("click", function() {
//   alert("header clicked");

// const handlesummit=(e)=>{
//     e.preventDefault();
//   let email=document.getElementById("email").value;
//   let password=document.getElementById("password").value;
//   console.log(email,password);
//   document.getElement

// } 
// const form=document.getElementById("login");
// form.addEventListener("submit", handlesummit);
// login.addEventListener("click", function() {
//   alert("header clicked");
// });

