const freelancers = [
    { name: "Alice", startingPrice: 25, occupation: "Gardener" },
    { name: "Bob", startingPrice: 51, occupation: "Programmer" },
    { name: "Carol", startingPrice: 43, occupation: "Teacher" },
    { name: "Ted", startingPrice: 81, occupation: "Arbitrator" },
    { name: "Alice", startingPrice: 43, occupation: "Teacher" },
    { name: "Eve", startingPrice: 76, occupation: "Private Eye" },
    { name: "Judy", startingPrice: 47, occupation: "Judge" },
    { name: "Mallory", startingPrice: 72, occupation: "Black Hat services" },
  ];

  function displayFreelancers() {
    const freelancersList = document.getElementById("freelancersList");
    freelancersList.innerHTML = "";
  
    freelancers.forEach((freelancer) => {
      const freelancerDiv = document.createElement("div");
      freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}, Starting Price: $${freelancer.startingPrice}, Occupation: ${freelancer.occupation}</p>`;
      freelancersList.appendChild(freelancerDiv);
    });
  }
  
  function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length;
    const averagePriceSpan = document.getElementById("averagePrice");
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
  }
  
  function addNewFreelancer() {
    const newFreelancer = { name: "Carol", occupation: "Programmer", startingPrice: 70 };
    freelancers.push(newFreelancer);
    displayFreelancers();
    calculateAveragePrice();
  }

  function displayRandomFreelancer() {
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    const freelancer = freelancers[randomIndex];
    const freelancerDiv = document.createElement("div");
    freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}, Starting Price: $${freelancer.startingPrice}, Occupation: ${freelancer.occupation}</p>`;
    freelancersList.appendChild(freelancerDiv);
  
  }

  setInterval(displayRandomFreelancer, 1000);
  
  addNewFreelancer();
  calculateAveragePrice();  