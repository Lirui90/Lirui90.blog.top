const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("这里是完整文章内容！");
  });
});
