const bodyTag = document.querySelector("body");

const homeTag = document.querySelector("section.home");
const typecheckerTag = document.querySelector("div.typechecker-layer.large");
const typecheckerTagMob = document.querySelector("div.typechecker-layer.small");
const examplesTag = document.querySelector("div.examples-layer span");
const examplesTagMob = document.querySelector("div.examples-layer.small");

// when i click on the home tab, all others close
homeTag.addEventListener("click", function() {
  bodyTag.classList.remove("try-it-open");
  bodyTag.classList.remove("examples-open");
});

// click on the examples tab
// if both try it and examples tabs are open, only toggle try it
var openChecker = 0;
examplesTag.addEventListener("click", function() {
  bodyTag.classList.toggle("examples-open");
  bodyTag.classList.remove("try-it-open");
  bodyTag.classList.add("hide-it-as-well");
  setTimeout(() => {
    bodyTag.classList.remove("hide-it-as-well");
  }, 600);
});
examplesTagMob.addEventListener("click", function() {
  bodyTag.classList.toggle("examples-open");
  bodyTag.classList.remove("try-it-open");
  bodyTag.classList.add("hide-it-as-well");
  setTimeout(() => {
    bodyTag.classList.remove("hide-it-as-well");
  }, 600);
});

// when i click on the try it tab, both try it and examples must be open
// if examples is closed, typechecker must also close
typecheckerTag.addEventListener("click", function() {
  bodyTag.classList.toggle("try-it-open");
});
typecheckerTagMob.addEventListener("click", function() {
  bodyTag.classList.toggle("try-it-open");
});

// examplesTab on click… check for classList.contains("examples")
// in an if statement, if yes, classList = "" (back to home),
// if no, classList = "examples" (to examples tab)
examplesTag.addEventListener("click", function() {
  bodyTag.classList.contains("");
  if (this) {
    bodyTag.classList.add("examples-open");
  } else {
    bodyTag.classList.remove("examples-open");
  }
  typechecker;
});
// try it out, same thing, if `body.try-it-out` already,
// change class to `examples` instead so it goes to that tab,
// if not, open tab with bodyTag.classList =  "try-it-out"
typecheckerTag.addEventListener("click", function() {
  bodyTag.classList.contains("");
  if (this) {
    bodyTag.classList.add("try-it-open");
  } else {
    bodyTag.classList.remove("try-it-open");
  }
});