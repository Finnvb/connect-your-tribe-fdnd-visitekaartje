// -------------------- Flip card --------------------
const card = document.getElementsByClassName("container");

card[0].addEventListener('click', flip);

function flip(event) {
  let element = event.currentTarget;
  if (element.className === "container") {

    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";

    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
// -------------------- Flip card --------------------





// -------------------- API handling --------------------
const baseURL = "https://tribe.api.fdnd.nl/v1";
const studentID = 13;
const nameElement = document.getElementById("name");
const githubHandleElement = document.getElementById("githubHandle");


function fetchNameFromAPI() {
  fetch(`${baseURL}/member`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let members = json.data; // array object met alle members 
      members.forEach((member) => {
        if (member.memberId == 21) {

          const nameAPI = member.name + " " + member.prefix + member.surname;
          nameElement.innerHTML = nameAPI;

          const githubHandleAPI = member.githubHandle;
           githubHandleElement.innerHTML = githubHandleAPI;


        }
      })
      console.log(members);

    })
}
fetchNameFromAPI();