const bookingCardTemplate = document.querySelector("[data-booking-template]")
const bookingCardContainer = document.querySelector("[data-booking-cards-container]")
const searchInput = document.querySelector("[data-search]")

let bookings = []

searchInput.addEventListener("input", e => {
const value = e.target.value.toLowerCase()
bookings.forEach(booking => {
    const isVisible =
    booking.customerName.toLowerCase().includes(value) ||
    booking.phoneNumber.includes(value) ||
    booking.mail.toLowerCase().includes(value) ||
    booking.CPR.includes(value) ||
    booking.startDate.includes(value) ||
    booking.endDate.includes(value) ||
    booking.status.toLowerCase().includes(value) ||
    booking.element.classList.toggle("hide", !isVisible)
})
})

fetch("/json/list.json")
.then(res => res.json())
.then(data => {
    bookings = data.map(booking => {
    const card = bookingCardTemplate.content.cloneNode(true).children[0]
    const customerName = card.querySelector("[data-customerName]")
    const phoneNumber = card.querySelector("[data-phoneNumber]")
    const mail = card.querySelector("[data-mail]")
    const CPR = card.querySelector("[data-CPR]")
    const startDate = card.querySelector("[data-startDate]")
    const endDate = card.querySelector("[data-endDate]")
    const status = card.querySelector("[data-status]")
    customerName.textContent = booking.customerName, phoneNumber.textContent = booking.phoneNumber, mail.textContent = booking.mail,
    CPR.textContent = booking.CPR, startDate.textContent = booking.startDate,
    endDate.textContent = booking.endDate, status.textContent = booking.status
    bookingCardContainer.append(card)
    return { 
        customerName: booking.customerName, phoneNumber: booking.phoneNumber, mail: booking.mail, CPR: booking.CPR,
        startDate: booking.startDate, endDate: booking.endDate, status: booking.status, 
        element: card }
})
    //Accordion
var acc = document.getElementsByClassName("accordion");
var i;
    
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}
})