document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready.");
    fetch('data.json')
        .then(response => {
            console.log("Received response from fetch.");
            return response.json();
        })
        .then(data => {
            console.log("Data loaded:", data);
            createCards(data.cards);
        })
        .catch(error => console.error('Error loading the JSON data: ', error));
});

function createCards(cardsData) {
    console.log("Creating cards with data:", cardsData);
    const cardsContainer = document.getElementById('cards-container'); // Make sure you have this ID in your HTML
    if (!cardsContainer) {
        console.error("Cannot find the container for the cards.");
        return;
    }
    cardsData.forEach(card => {
        console.log("Processing card:", card);
        const cardHTML = `<div class="card" style="width: 18rem;">...`;
        cardsContainer.innerHTML += cardHTML;
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Simulated data response
    const simulatedData = {
        cards: [
            { title: "Card 1", image: "https://via.placeholder.com/150", description: "Description for Card 1." },
            { title: "Card 2", image: "https://via.placeholder.com/150", description: "Description for Card 2." }
        ]
    };
    createCards(simulatedData.cards);
});
