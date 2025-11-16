//While checking the wenbsite "Model Toy Cars" I found the car https://modeltoycars.com/2016-chevy-camaro-candy-blue-jada-toys-32993-4-1-24-scale-diecast-model-toy-car/
//Which I could analyze and work on this lab and complete the tasks below

// Creating an Construtor 
function ToyCar(brand, model, color, price, inStock) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.inStock = inStock;
    this.features = [];
// Extra 10-15 object properties can be added here as needed
// Extra properties (10–15)
    this.scale = "1:24";                 // String
    this.weight = 0.45;                  // Number (kg)
    this.material = ["Diecast Metal", "Plastic"];  // Array
    this.manufacturer = "Jada Toys";     // String
    this.yearReleased = 2016;            // Number
    this.ageRecommendation = "8+";       // String
    this.length = 7.5;                   // Number (inches)
    this.limitedEdition = false;         // Boolean
    this.category = "Diecast Model";     // String
    this.countryOfOrigin = "China";      // String
    this.warranty = {                    // Object
        duration: "6 months",
        type: "Manufacturer"
    };
    this.ratings = {                     // Object
        average: 4.7,
        totalReviews: 120
    };
    this.seller = {                      // Object
        name: "ModelToyCars",
        shippingFee: 5.99
    };
    this.dimensions = {                  // Object
        length: 7.5,
        width: 3.0,
        height: 2.5
    };
     // Interaction methods
         this.addFeature = function (feature) {
                this.features.push(feature);
            };
            this.updatePrice = function (newPrice) {
                this.price = newPrice;
            };
            this.changeColor = function (newColor) {
                this.color = newColor;
            };
            this.toggleStock = function () {
                this.inStock = !this.inStock;
            };
        }

// Creating an Instance of the ToyCar with different properties
const car1 = new ToyCar("Chevrolet", "Camaro", "Blue", 24.99, true);
const car2 = new ToyCar("Chevrolet", "Camaro", "Red", 24.99, false);
const car3 = new ToyCar("Ford", "Mustang", "Yellow", 29.99, true);

// Adding features to the car1 instance
car1.features.push("Opening doors", "Detailed interior", "Rubber tires");
car2.features.push("Opening doors", "Detailed interior", "Rubber tires");
car3.features.push("Opening doors", "Detailed interior", "Rubber tires");

//Chossing the Car based on the dropdown selection
function getSelectedCar() {
    const selectedCar = document.getElementById("carSelect").value;
    let car;
    if (selectedCar === "car1") {
        car = car1;
    } else if (selectedCar === "car2") {
        car = car2;
    } else if (selectedCar === "car3") {
        car = car3;
    }
    return car;
}
// Displaying car details on the webpage
function displayCarDetails() {
    const car = getSelectedCar();
    document.getElementById("carDetails").innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Price:</strong> $${car.price}</p>
        <p><strong>In Stock:</strong> ${car.inStock ? "Yes" : "No"}</p>
        <p><strong>Scale:</strong> ${car.scale}</p>
        <p><strong>Weight:</strong> ${car.weight} kg</p>
        <p><strong>Material:</strong> ${car.material.join(", ")}</p>
        <p><strong>Manufacturer:</strong> ${car.manufacturer}</p>
        <p><strong>Year Released:</strong> ${car.yearReleased}</p>
        <p><strong>Age Recommendation:</strong> ${car.ageRecommendation}</p>
        <p><strong>Length:</strong> ${car.length} inches</p>
        <p><strong>Limited Edition:</strong> ${car.limitedEdition ? "Yes" : "No"}</p>
        <p><strong>Category:</strong> ${car.category}</p>
        <p><strong>Country of Origin:</strong> ${car.countryOfOrigin}</p>
        <p><strong>Warranty:</strong> ${car.warranty.duration} (${car.warranty.type})</p>
        <p><strong>Ratings:</strong> ${car.ratings.average} stars (${car.ratings.totalReviews} reviews)</p>
        <p><strong>Seller:</strong> ${car.seller.name} (Shipping Fee: $${car.seller.shippingFee})</p>
        <p><strong>Dimensions (LxWxH):</strong> ${car.dimensions.length} x ${car.dimensions.width} x ${car.dimensions.height} inches</p>
        <p><strong>Features:</strong> ${car.features.join(", ")}</p>

    `;
}
// Event listeners for buttons
// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {

// Buttons to interact with the car object
document.getElementById("showDetailsBtn").onclick = displayCarDetails;
//Button to update price
document.getElementById("updatePriceBtn").onclick = function() {
    const car = getSelectedCar();
    const newPrice = parseFloat(prompt("Enter new price:"));
    if (!isNaN(newPrice)) {
        car.updatePrice(newPrice);
        displayCarDetails();
    }
};
//Button to toggle stock status
document.getElementById("toggleStockBtn").onclick = function() {
    const car = getSelectedCar();
    car.toggleStock();
    displayCarDetails();
}
//Button to change color
document.getElementById("changeColorBtn").onclick = function() {
    const car = getSelectedCar();
    const newColor = prompt("Enter new color:");
    if (newColor) {
        car.changeColor(newColor);
        displayCarDetails();}
};
// Button to add feature
document.getElementById("addFeatureBtn").onclick = function() {
    const car = getSelectedCar();
    const newFeature = prompt("Enter new feature:");    
    if (newFeature) {
        car.addFeature(newFeature);
        displayCarDetails();
    }
};
// Add event listener to dropdown to update display when selection changes
    document.getElementById("carSelect").onchange = displayCarDetails;
    
    // NOW show initial car details after all event listeners are set up
    displayCarDetails();
});
