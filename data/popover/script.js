const slider = document.querySelector('input[type="range"]');

self.port.on('show', () => {
  slider.addEventListener('change', (e) => {
     self.port.emit('safesetting', e.target.value);
     showPanel(e.target.value);
   });
});

self.port.on('levelchange', (v) => {
  slider.value = v;
  showPanel();
});

function showPanel(level = 1) {
  const panels = [...document.querySelectorAll('.panel-text section')];
  for (let panel of panels) {
    panel.classList.add('hide');
  }
  document.querySelector('.panel-level-' + level).classList.remove('hide');
}
