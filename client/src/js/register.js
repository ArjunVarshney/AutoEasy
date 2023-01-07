const registerForm = document.getElementById("register-form");

function getMode(element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) return element[i].value;
  }
}

const sendData = async (data) => {
  let url = `http://localhost:8000/${
    data.passenger ? "user" : "driver"
  }/create`;

  const response = await axios.post(url, data);

  console.log(response);
};

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const mode = document.getElementsByName("input_passenger");

  sendData({ passenger: getMode(mode) == "passenger", name, email, password });
});
