// Array of quotes
var quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
    
  ];
  
  // Function to generate a random quote
  function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteText = document.getElementById("quote-text");
    quoteText.textContent = quotes[randomIndex];
  }
  
  // Event listener for new quote button
  var newQuoteBtn = document.getElementById("new-quote-btn");
  newQuoteBtn.addEventListener("click", generateRandomQuote);
  
  // Generate initial random quote
  generateRandomQuote();
  