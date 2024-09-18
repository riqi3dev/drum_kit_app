let allButtons = document.querySelectorAll(".kit").length;
for (let i = 0; i < allButtons; i++) {
  document
    .querySelectorAll(".container>.wrapper>button")
    [i].addEventListener("click", function () {
      alert("boom");
    });
}
 