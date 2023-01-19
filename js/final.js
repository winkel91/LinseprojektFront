function initialize() {

    const bookingCardTemplate = document.querySelector("[data-booking-template]")
    const bookingCardContainer = document.querySelector("[data-booking-cards-container]")
    const searchInput = document.querySelector("[data-search]")

    let bookings = []

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        bookings.forEach(booking => {
            const isVisible =
                booking.customerName.toLowerCase().includes(value) ||
                booking.phoneNumber.includes(value)
            booking.element.classList.toggle("hide", !isVisible)
        })
    })


    // Get the modal
    var modal = document.getElementById("myModal");

    // When the user clicks on the button, open the modal
    document.getElementById('myBtn').onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName("close")[0].onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
    fetch("/json/personlig.json")

        .then(res => res.json())
        .then(data => {
            bookings = data.map(booking => {
                const card = bookingCardTemplate.content.cloneNode(true).children[0]
                const id = card.querySelector("[data-id]")
                const customerName = card.querySelector("[data-customerName]")
                const phoneNumber = card.querySelector("[data-phoneNumber]")
                const startDate = card.querySelector("[data-startDate]")
                const endDate = card.querySelector("[data-endDate]")
                const status = card.querySelector("[data-status]")
                id.textContent = booking.id, customerName.textContent = booking.customerName, phoneNumber.textContent = booking.phoneNumber, startDate.textContent = booking.startDate, endDate.textContent = booking.endDate, status.textContent = booking.status,
                    bookingCardContainer.append(card)
                return {
                    id: booking.id, customerName: booking.customerName, phoneNumber: booking.phoneNumber,
                    startDate: booking.startDate, endDate: booking.endDate, status: booking.status,
                    element: card
                }
            })
        })

};