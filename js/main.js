const user = document.querySelector("#user");
const home = document.querySelector("#home");
const coHome = document.querySelector(".co-home");
const coAbout = document.querySelector(".co-about");

// Custmize cursor
{
  const cursor = document.querySelector(".cursor");
  window.addEventListener("mousemove", (eo) => {
    cursor.style.left = eo.pageX + "px";
    cursor.style.top = eo.pageY + "px";
  });
}
//

// user button
{
  const user = document.querySelector("#user");
  const home = document.querySelector("#home");
  const coHome = document.querySelector(".co-home");
  const coAbout = document.querySelector(".co-about");

  const userS = (eo) => {
    home.classList.remove("active");
    user.classList.add("active");
    coHome.classList.add("d-none");
    coAbout.classList.remove("d-none");
    coAbout.classList.add("ani");
    contactme.classList.remove("active");
        contact.classList.add("d-none");

  };
  user.addEventListener("click", (eo) => {
    userS();
  });

  aboutBtn.addEventListener("click", (eo) => {
    userS();
  });
  aboutBtn2.addEventListener("click", (eo) => {
    userS();
  });
}

{
  home.addEventListener("click", (eo) => {
    home.classList.add("active");
    user.classList.remove("active");
    coHome.classList.remove("d-none");
    coHome.classList.add("ani");
    coAbout.classList.add("d-none");
    contactme.classList.remove("active");
        contact.classList.add("d-none");

  });
}

{
  contactme.addEventListener("click", (eo) => {
    contact.classList.add("ani");
    home.classList.remove("active");
    user.classList.remove("active");
    contactme.classList.add("active");
    coHome.classList.add("d-none");
    coAbout.classList.add("d-none");
    contact.classList.remove("d-none");
  });
}













// let x = window.matchMedia("(max-width: 700px)");
// function x3raqe(x) {
//   if (x.matches) {
//     // If media query matches
//     conAll.classList.add("d-none");
//   } else {
//     conAll.classList.remove("d-none");
//   }
// }
// x3raqe(x); // Call listener function at run time
