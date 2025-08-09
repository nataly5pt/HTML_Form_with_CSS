// Live output for range
const range = document.getElementById('satisfaction');
const out = document.getElementById('satisfactionOut');
if (range && out) {
  out.value = range.value;
  range.addEventListener('input', () => (out.value = range.value));
}

// Show picked color code
const color = document.getElementById('color');
const swatch = document.getElementById('colorSwatch');
if (color && swatch) {
  const set = () => (swatch.textContent = color.value.toUpperCase());
  set();
  color.addEventListener('input', set);
}
