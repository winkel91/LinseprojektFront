
fetch("/PSBProjekt/øjne.json")



.then(res => res.json())

.then(data => {

    bookings = data.map(booking => {

    const card = bookingCardTemplate.content.cloneNode(true).children[0]

    const id = card.querySelector("[data-id]")


    const lstrength = card.querySelector("[data-lstrength]")

    const rstrength = card.querySelector("[data-rstrength]")

    const lradius = card.querySelector("[data-lradius]")

    const rradius = card.querySelector("[data-rradius]")

    const ldiameter = card.querySelector("[data-ldiameter]")

    const rdiameter = card.querySelector("[data-rdiameter]")

    const lcylinder = card.querySelector("[data-lcylinder]")

    const rcylinder = card.querySelector("[data-rcylinder]")

    const laxe = card.querySelector("[data-laxe]")

    const raxe = card.querySelector("[data-raxe]")

    const laddition = card.querySelector("[data-laddition]")

    const raddition = card.querySelector("[data-raddition]")

    const lfrequency = card.querySelector("data-lfrequency")

    const rfrequency = card.querySelector("data-rfrequency")

    const lsupplier = card.querySelector("data-lsupplier")
    
    const rsupplier = card.querySelector("data-rsupplier")

    const lpackettype = card.querySelector("data-lpackettype")

    const rpackettype = card.querySelector("data-packettype")

    const lamount = card.querySelector("data-lamount")

    const ramount = card.querySelector("data-ramount")

    const customerName = card.querySelector("data-customerName")



    


    id.textContent = booking.id,lstrength.textContent = booking.lstrength, rstrength.textContent = booking.rstrength, lradius.booking = booking.lradius,
    rradius.textContent = booking.rradius,ldiameter.textContent = booking.ldiameter,rdiameter.textContent = booking.rdiameter,lcylinder.textContent = booking.lcylinder,
    rcylinder.textContent = booking.rcylinder,laxe.textContent = booking.laxe,raxe.textContent = booking.raxe,laddition.textContent = booking.laddition,
    raddition.textContent = booking.raddition,lfrequency.textContent = booking.lfrequency,rfrequency.textContent = booking.rfrequency,
    lsupplier.textContent = booking.lsupplier, rsupplier.textContent = booking.rsupplier,lpackettype.textContent = booking.lpackettype,rpackettype.textContent = booking.rpackettype,
    lamount.textContent = booking.lamount,ramount.textContent = booking.ramount,customerName.textContent = booking.customerName
    

    bookingCardContainer.append(card)

   

})  

})