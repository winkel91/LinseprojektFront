
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

    id.textContent = booking.id,customerName.textContent = booking.customerName, phoneNumber.textContent = booking.phoneNumber, startDate.textContent = booking.startDate,

    endDate.textContent = booking.endDate, status.textContent = booking.status

    bookingCardContainer.append(card)

    return {

        id: booking.id, customerName: booking.customerName, phoneNumber: booking.phoneNumber, mail: booking.mail, CPR: booking.CPR,

        startDate: booking.startDate, endDate: booking.endDate, status: booking.status,

        element: card }

})  

})