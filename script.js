// Using a Map to store train names and their corresponding prices
const trainPrices = new Map([
    ["Train A", 50],
    ["Train B", 60],
    ["Train C", 80]
]);

// Function to handle booking logic
function bookTicket() {
    // Get selected train, time, and number of tickets
    const train = document.getElementById("train").value;
    const time = document.getElementById("time").value;
    const tickets = parseInt(document.getElementById("tickets").value);
    const summaryDiv = document.getElementById("summary");

    // Validate number of tickets
    if (isNaN(tickets) || tickets <= 0) {
        alert("Please enter a valid number of tickets.");
        summaryDiv.style.display = "none";
        return;
    }

    // Get price and calculate total
    const pricePerTicket = trainPrices.get(train);
    const totalPrice = pricePerTicket * tickets;

    // Display the booking summary
    summaryDiv.innerHTML = `
        <h3>Booking Summary</h3>
        <p><strong>Train:</strong> ${train}</p>
        <p><strong>Departure Time:</strong> ${time}</p>
        <p><strong>Number of Tickets:</strong> ${tickets}</p>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
    `;
    summaryDiv.style.display = "block";
}
