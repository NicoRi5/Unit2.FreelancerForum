// arrays of names and occupations
const names = [
  "Fernando",
  "Alexander",
  "Sarah",
  "Wanda",
  "Denis",
  "Sharon",
  "Maxwell",
];

const occupations = ["Teacher", "Programmer", "Gardener", "Artist", "Writer"];

const freelancers = [
  { name: "Wanda", occupation: "Programmer", price: 45 },
  { name: "Maxwell", occupation: "Gardener", price: 30 },
];

// average starting price function
const calculateAverage = () => {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return freelancers.length ? (total / freelancers.length).toFixed(2) : 0;
};

// displaying and centering the text in a box
const render = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.padding = "20px";
  container.style.margin = "20px";
  container.style.textAlign = "center";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

  const h1 = document.createElement("h1");
  h1.innerText = "Freelancer Forum";
  container.append(h1);

  const h2 = document.createElement("h2");
  h2.innerText = `The average starting price is $${calculateAverage()}`;
  container.append(h2);

  const fullList = document.createElement("ul");
  freelancers.forEach((freelancer) => {
    const listFreelancer = document.createElement("li");
    listFreelancer.innerText = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
    fullList.appendChild(listFreelancer);
  });
  container.append(fullList);
  app.append(container);
};
render();

// generate new random freelancers
const randomizeFreelancer = () => {
  const newName = names[Math.floor(Math.random() * names.length)];
  const newOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const newPrice = Math.floor(Math.random() * 75) + 1;
  return { name: newName, occupation: newOccupation, price: newPrice };
};

setInterval(() => {
  const newFreelancer = randomizeFreelancer();
  freelancers.push(newFreelancer);
  render();
}, 3000);
