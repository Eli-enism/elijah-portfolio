document.getElementById("loadButton").addEventListener("click", function () {
  const loader = document.getElementById("loader");

  // Show the loader with fade-in effect
  loader.classList.add("visible");

  // Simulate loading delay
  setTimeout(() => {
    // Trigger fade-out effect
    loader.classList.remove("visible");
    loader.classList.add("hidden");

    setTimeout(() => {
      window.location.href = "/elianOS/html/homepage.html"; 
    }, 200); // fade-out duration
  }, 2000); // delay for loader
});