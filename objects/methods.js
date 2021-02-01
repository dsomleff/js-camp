let restaurant = {
    name: 'Puzata Hata',
    guestCapacity: 75,
    guestCount: 0,

    checkAvailability(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount

        return partySize <= seatsLeft
    },

    seatParty(seatsAmount) {
        this.guestCount = this.guestCount + seatsAmount
    },

    removeParty(seatsAmount) {
        this.guestCount = this.guestCount - seatsAmount
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));
