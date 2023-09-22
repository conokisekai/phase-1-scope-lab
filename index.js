// Write your solution in this file!
// Initialize global variables
window.customerName = 'bob';
window.bestCustomer;

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  try {
    const leastFavoriteCustomer = 'initial value';
    leastFavoriteCustomer = 'new value';
  } catch (error) {
    throw new Error('Assignment to constant variable.');
  }
}
