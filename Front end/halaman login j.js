document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username.trim() === "" || password.trim() === "") {
    errorMessage.textContent = "Username dan password tidak boleh kosong.";
  } else {
    errorMessage.textContent = "";
    alert(`Selamat datang, ${username}!`);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
});