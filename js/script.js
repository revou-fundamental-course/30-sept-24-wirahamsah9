document.getElementById('tempForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var temperature = document.getElementById('temperature').value;
    var unit = document.getElementById('unit').value;

    // Form validation
    if (temperature.trim() === "") {
        document.getElementById('result').innerHTML = "Please enter a valid temperature value.";
        document.getElementById('details').innerHTML = "";
        return; 
    }

    temperature = parseFloat(temperature); // Convert input -> float

    // Check
    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = "The value must be a numeric value. Please enter a valid temperature.";
        document.getElementById('details').innerHTML = "";
        return;
    }

    var result;
    if (unit === "Celsius") {
        // Convert Celsius - Fahrenheit
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerHTML = temperature + "°C is equal to " + result.toFixed(2) + "°F.";

        // calculation details - formula
        document.getElementById('details').innerHTML = `
            <p>Formula: (C × 9/5) + 32 = F</p>
            <p>Calculation: (${temperature} × 9/5) + 32 = ${result.toFixed(2)}°F</p>
        `;
    } else if (unit === "Fahrenheit") {
        // Convert  Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerHTML = temperature + "°F is equal to " + result.toFixed(2) + "°C.";

        // calculation details - formula
        document.getElementById('details').innerHTML = `
            <p>Formula: (F - 32) × 5/9 = C</p>
            <p>Calculation: (${temperature} - 32) × 5/9 = ${result.toFixed(2)}°C</p>
        `;
    }
});

// Reset button functionalitas
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'Celsius'; // Reset to Celsius
    document.getElementById('result').innerHTML = '';
    document.getElementById('details').innerHTML = '';
});
