const chart = document.querySelector("#chart").getContext("2d");

// Create a new chart instance
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          33456, 56789, 53123, 47890, 54567, 68901, 51234, 56543, 54321, 69012,
          65876,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          31234, 32123, 29012, 19901, 30090, 46789, 65678, 70567, 83456, 82345,
          56542,
        ],
        borderColor: "#23232a",
        borderWidth: 2,
      },
      {
        label: "EUR",
        data: [
          40982, 38091, 39123, 42001, 47890, 50123, 68901, 75432, 69321, 79234,
          81234,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: { responsive: true },
});

// Show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// Change theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});

// Function to create and append a close icon to a badge
function addCloseIcon(badge) {
  const closeIcon = document.createElement("span");
  closeIcon.classList.add("material-symbols-sharp", "close-icon");
  closeIcon.textContent = "close";
  closeIcon.addEventListener("click", function () {
    badge.remove(); // Remove the badge when the close icon is clicked
  });
  badge.appendChild(closeIcon); // Append the close icon to the badge
}

document.addEventListener("DOMContentLoaded", function () {
  // Add close icon to existing badges (excluding the add button)
  document.querySelectorAll(".badge:not(:first-child)").forEach((badge) => {
    addCloseIcon(badge);
  });

  // Handle click on the add icon
  const addIcon = document.querySelector(
    ".badge:first-child .material-symbols-sharp"
  );
  addIcon.addEventListener("click", function () {
    // Ask for name and price
    let name = prompt("Enter name:");
    const price = prompt("Enter price:");
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Create new badge
    if (name && price) {
      const newBadge = document.createElement("div");
      newBadge.classList.add("badge");
      const content = document.createElement("div");
      content.innerHTML = `<h5>${name}</h5><h4>$${price}</h4>`;
      newBadge.appendChild(content);
      const dotIcon = document.createElement("span");
      dotIcon.classList.add("bg-primary");
      newBadge.prepend(dotIcon);

      // Add close icon using the common function
      addCloseIcon(newBadge);

      // Insert new badge after the add icon badge
      const addBadge = document.querySelector(".badge:first-child");
      addBadge.parentNode.insertBefore(newBadge, addBadge.nextSibling);
    }
  });
});
