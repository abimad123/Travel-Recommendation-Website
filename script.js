function addRecommendation() {
  const text = document.getElementById("newRecommendation").value;

  if (text.trim() === "") {
    alert("Please enter a recommendation.");
    return;
  }

  const container = document.getElementById("recommendation-list");

  const div = document.createElement("div");
  div.className = "recommendation";
  div.innerHTML = `<p>"${text}"</p><span>- Anonymous</span>`;

  container.appendChild(div);

  document.getElementById("newRecommendation").value = "";

  alert("Recommendation submitted successfully!");
}
