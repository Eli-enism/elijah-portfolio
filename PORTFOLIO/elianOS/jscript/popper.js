// Get all icons and poppers
    const icons = document.querySelectorAll('.icon');
    const poppers = document.querySelectorAll('.popper');
    const overlay = document.getElementById('overlay');

    // Open the corresponding popper
    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        const targetPopperId = icon.getAttribute('data-popper');
        const targetPopper = document.getElementById(targetPopperId);

        // Show the overlay and target popper
        overlay.style.display = 'block';
        targetPopper.style.display = 'block';

        // Add pop effect
        targetPopper.classList.add('pop');

        // Remove pop effect after animation
        setTimeout(() => {
          targetPopper.classList.remove('pop');
        }, 400);
      });
    });

    // Close the popper
    document.querySelectorAll('.close-btn').forEach(button => {
      button.addEventListener('click', () => {
        poppers.forEach(popper => popper.style.display = 'none');
        overlay.style.display = 'none';
      });
    });

    // Close popper when clicking on the overlay
    overlay.addEventListener('click', () => {
      poppers.forEach(popper => popper.style.display = 'none');
      overlay.style.display = 'none';
    });