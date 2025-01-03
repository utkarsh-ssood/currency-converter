# Currency Converter

A simple, yet powerful web application for real-time currency conversion. This Currency Converter allows users to convert currencies dynamically, providing live exchange rates, a user-friendly interface, and responsive design.

---

## Features

### 🌍 Dynamic Currency Selection
Select currencies from an extensive dropdown menu that supports a wide range of global currencies.

### 🏳️ Country Flags
Automatically displays the flag of the selected currency to provide a visual representation of the chosen country.

### 🔄 Real-Time Conversion
Fetches live exchange rates using the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies) to ensure accurate conversions.

### 💻 Responsive Design
Optimized for use across multiple devices including desktops, tablets, and mobile phones.

---

## Demo

Experience the app live: [Currency Converter](https://utkarsh-ssood.github.io/currency-converter/).

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/currency-converter.git

2. **Navigate to the project directory:**

   ```bash
   cd currency-converter

3. **Launch the app:** Open the index.html file in your preferred web browser.

---

## Usage
The Currency Converter is designed for ease of use. Start by selecting the "From" and "To" currencies from the dropdown menus. Enter the amount you wish to convert into the input field, then click the Convert button. The app will instantly display the converted value, along with updated flags corresponding to the selected currencies.


---

## Technologies Used
This project leverages the following technologies:
- **HTML**: Used to structure the application and define its elements.
- **CSS**: Provides styling for the application, ensuring it is visually appealing and user-friendly.
- **JavaScript**: Handles all the dynamic functionalities, including API integration, dropdown interactions, and currency conversion.

The **Currency API** is used for fetching real-time exchange rates.

---

## API References
The Currency Converter fetches exchange rates from the **Currency API**. 

The base URL for the API is:  
`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`

To get specific rates, use endpoints like:  
`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`

This provides real-time exchange rates for USD and can be modified for other currencies.

---

## Contributing

Contributions to this project are always welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix using:
   ```bash
   git checkout -b feature/my-feature
3. Make your changes and commit them:
   ```bash
   git commit -m "Add my feature"
4. Push to your branch:
   ```bash
   git push origin feature/my-feature
5. Open a pull request to merge your changes into the main repository.

---

