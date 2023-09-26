document.addEventListener('mousemove', mousemove);

function mousemove(event) {
  const mainPanel = document.getElementById('mainPanel');
  const { x, y } = mainPanel.getBoundingClientRect();
  mainPanel.style.setProperty('--cursor-x', `${ event.clientX - x }px`);
  mainPanel.style.setProperty('--cursor-y', `${ event.clientY - y }px`);
}