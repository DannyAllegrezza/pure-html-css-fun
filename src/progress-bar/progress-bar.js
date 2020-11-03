window.addEventListener("scroll", function (event) {
  // console.log(document.body.scrollHeight);
  // console.log(window.innerHeight);
  // let yPosition = this.scrollY;
  // console.log(`The current Y position is ${yPosition}`);
  // var distanceFromBottom =
  //   document.body.scrollHeight - window.innerHeight - window.scrollY;
  // console.log(`Distance from bottom: ${distanceFromBottom}`);
});

document.onscroll = function () {
  let parent = document.body.parentNode;

  console.log("scroll top", parent.scrollTop);
  console.log("scrollHeight", parent.scrollHeight);
  console.log("clientHeight", parent.clientheight);
  let position =
    (parent.scrollTop / (parent.scrollHeight - parent.clientHeight)) * 100;

  console.log(position);
};
