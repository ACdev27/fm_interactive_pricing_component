
// Reference to page views text element
let pageviews = document.querySelector('.price-card__views span');

// Reference to price text element
let price = document.querySelector('.price-card__price-amount');

// Reference to range slider
let rangeSlider = document.getElementById('price-slider');

// Reference to toggle
let toggle = document.querySelector('.price-card__toggle-switch');

// Reset range slider to middle posittion and toggle to monthly on load
document.addEventListener('DOMContentLoaded', () => {
  rangeSlider.value = 3;
  toggle.classList.add('price-card__toggle-switch--monthly');
  toggle.getAttribute("aria-pressed") == "false";
});

// Add Event handler for range slider
rangeSlider.addEventListener('change', rangeChange);

// Add event handler for toggle
toggle.addEventListener('click', toggleClick);

//  Add event listener for keypress - for toggle
toggle.addEventListener('keydown', toggleKeyDown);

// Set pageviews display based on range slider position (5 steps)
function rangeChange() {
  let rangeValue = parseInt(rangeSlider.value);

  switch (rangeValue) {
    case 1: 
      pageviews.textContent = "10K";
      price.textContent = getPrice(8);

      break;
    case 2: 
      pageviews.textContent = "50K";
      price.textContent = getPrice(12);
      break;
    case 3: 
      pageviews.textContent = "100K";
      price.textContent = getPrice(16);
      break;
    case 4: 
      pageviews.textContent = "500K";
      price.textContent = getPrice(24);
      break;
    case 5: 
      pageviews.textContent = "1M";
      price.textContent = getPrice(36);
      break;
    default:
      pageviews.textContent = "100K";
      price.textContent = getPrice(16);
  }
}


function toggleKeyDown(e) {
  console.log("toggle focus and key pressed");
  e.preventDefault();
  if (e.key == " " || e.key == "Enter") {
    toggleClick();
  }

}


function toggleClick() {
  toggle.classList.toggle('price-card__toggle-switch--monthly');
  toggle.classList.toggle('price-card__toggle-switch--yearly')
  toggleAriaPressed();
  
  // Update price when billing period changed
  updatePrice();
}


// Update ARIA pressed state for toggle switch button
function toggleAriaPressed() {

  console.log("toggleAriaPressed() called");

  // Set aria-pressed state to opposite state
  if (toggle.getAttribute("aria-pressed") == "false") {
    toggle.setAttribute("aria-pressed", "true");
  } else {
    toggle.setAttribute("aria-pressed", "false");
  }
}


function getPrice(price) {
  // Get state of billing toggle switch. true if monthly. false if yearly
  let billingToggle = toggle.classList.contains('price-card__toggle-switch--monthly'); 

  if (billingToggle) {
    return price.toFixed(2);
  } else {
    // Reduce price by yearly discount
    price = price * .75;
    return price.toFixed(2);
  }
}

function updatePrice() {
  let updatedPrice;

  // Get the current price - string value
  currentPrice = price.textContent;
  
  // Convert to number
  currentPrice = parseInt(currentPrice);
  
  // Get state of billing toggle switch.
  let billingToggle = toggle.classList.contains('price-card__toggle-switch--monthly'); 

  if (billingToggle) {
    // Toggle set to monthly
    currentPrice = (currentPrice / 3) * 4;
    updatedPrice = currentPrice.toFixed(2);

  } else {
    //Toggle set to yearly
    currentPrice = currentPrice * .75;
    updatedPrice = currentPrice.toFixed(2);
  }

  price.textContent = updatedPrice;
}
