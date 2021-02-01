const data = {
    locations: [],
    get location() {
        return this._location
    },
    /**
     * @param {string} value
     */
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = '  Odesa      '
data.location = ' New York'
console.log(data);