const squad = [
    { name: "MS Dhoni", role: "Wicketkeeper-batsman", nationality: "India" },
    { name: "Ruturaj Gaikwad", role: "Batsman", nationality: "India" },
    { name: "Devon Conway", role: "Batsman", nationality: "New Zealand" },
    { name: "Shivam Dube", role: "All-rounder", nationality: "India" },
    { name: "Moeen Ali", role: "All-rounder", nationality: "England" },
    { name: "Ravindra Jadeja", role: "All-rounder", nationality: "India" },
    { name: "Deepak Chahar", role: "Bowler", nationality: "India" },
    { name: "Tushar Deshpande", role: "Bowler", nationality: "India" },
    { name: "Matheesha Pathirana", role: "Bowler", nationality: "Sri Lanka" },
    { name: "Maheesh Theekshana", role: "Bowler", nationality: "Sri Lanka" },
    { name: "Ben Stokes", role: "All-rounder", nationality: "England" },
    { name: "Ambati Rayudu", role: "Batsman", nationality: "India" },
    { name: "Dwaine Pretorius", role: "All-rounder", nationality: "South Africa" },
    { name: "Rajvardhan Hangargekar", role: "Bowler", nationality: "India" },
    { name: "Subhranshu Senapati", role: "Batsman", nationality: "India" },
    { name: "Simarjeet Singh", role: "Bowler", nationality: "India" },
    { name: "Mukesh Choudhary", role: "Bowler", nationality: "India" },
    { name: "Shaik Rasheed", role: "Batsman", nationality: "India" },
    { name: "Nishant Sindhu", role: "All-rounder", nationality: "India" },
    { name: "Ajay Mandal", role: "All-rounder", nationality: "India" },
    { name: "Bhagath Varma", role: "All-rounder", nationality: "India" },
    { name: "Prashant Solanki", role: "Bowler", nationality: "India" },
  ];
  
  const playersDiv = document.getElementById('players');
  
  squad.forEach((player, index) => {
    playersDiv.innerHTML += `
      <div class="card">
        <h3>${player.name}</h3>
        <p>${player.role}</p>
        <button onclick="showDetail(${index})" class="btn">View Profile</button>
      </div>
    `;
  });
  
  function showDetail(index) {
    const player = squad[index];
    document.getElementById('playerName').innerText = player.name;
    document.getElementById('playerRole').innerText = "Role: " + player.role;
    document.getElementById('playerNationality').innerText = "Nationality: " + player.nationality;
    document.getElementById('playerDetail').classList.remove('hidden');
  }
  
  function closeDetail() {
    document.getElementById('playerDetail').classList.add('hidden');
  }
  
