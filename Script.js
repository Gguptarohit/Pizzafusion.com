
function showDetails(pizzaType) {
  const allDetails = document.querySelectorAll('.details');

  // Hide all
  allDetails.forEach(detail => {
    detail.classList.remove('show');
    setTimeout(() => detail.style.display = 'none', 300); // Wait for transition
  });

  // Show selected
  const selected = document.getElementById(`details-${pizzaType}`);
  if (selected) {
    selected.style.display = 'block'; // Make sure it's in flow
    setTimeout(() => selected.classList.add('show'), 10); // Trigger fade in
  }
}
