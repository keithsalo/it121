// Set up the object
let hotel = new Object();
 
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
};
 
 
let elName = document.getElementById('hotelName'); // Get element
elName.textContent = 'Hotel Name: ' + hotel.name; // Update HTML with property of the object
 
let elRooms = document.getElementById('rooms'); // Get element
elRooms.textContent = 'Rooms Available: ' + hotel.checkAvailability(); // Update HTML with result of method