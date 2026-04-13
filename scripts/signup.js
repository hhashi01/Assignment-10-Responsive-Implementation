// FAKE DATA (NO BACKEND)
const items = ["Home", "Explore", "About", "Contact"];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const loader = document.getElementById("loader");

searchInput.addEventListener("input", () => {
  // Clear old results immediately
  results.innerHTML = "";

  // Show loader
  loader.classList.remove("hidden");

  // Simulate loading delay
  setTimeout(() => {
    loader.classList.add("hidden");

    const query = searchInput.value.toLowerCase();

    const matches = items.filter(item =>
      item.toLowerCase().includes(query)
    );

    // Show message if nothing matches
    if (matches.length === 0 && query !== "") {
      const li = document.createElement("li");
      li.textContent = "No results found";
      results.appendChild(li);
    }

    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match;
      results.appendChild(li);
    });

  }, 1200); // long delay so spinner is visible
}); // ← ADD THIS to close the search listener HERE

// Week 12 - Now OUTSIDE the search listener
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

/* ---------- NAME ---------- */
nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();

  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    showSuccess(nameInput);
  }
});

/* ---------- EMAIL ---------- */
emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailPattern.test(value)) {
    showError(emailInput, "Invalid email format");
  } else {
    showSuccess(emailInput);
  }
});

/* ---------- SUBMIT ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameInput.classList.contains("invalid") ||
    emailInput.classList.contains("invalid")
  ) {
    alert("Fix errors before submitting");
  } else {
    alert("Form submitted");
  }
});

/* ---------- HELPERS ---------- */
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;

  input.classList.add("invalid");
  input.classList.remove("valid");
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  error.textContent = "";

  input.classList.add("valid");
  input.classList.remove("invalid");
}

// ← REMOVED the extra }); from here