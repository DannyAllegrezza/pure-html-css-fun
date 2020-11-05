document.onscroll = function () {
  let parent = document.body.parentNode;
  let progressBar = document.getElementsByClassName("progress-bar")[0];

  let position = Math.floor((parent.scrollTop / (parent.scrollHeight - parent.clientHeight)) * 100);

  progressBar.style.width = `${position}%`;
};
