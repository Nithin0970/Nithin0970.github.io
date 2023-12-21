const buttons = document.querySelectorAll('.card button');

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    const cardTitle = card.querySelector('h2').textContent;
    console.log(`Button clicked in card: ${cardTitle}`);
  });
}

function redirectTo(url) {
  // Redirect to the specified URL
  window.location.href = 'http://127.0.0.1:5000' + url;
}

