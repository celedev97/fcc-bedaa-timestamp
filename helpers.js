module.exports = {
    //#region functions for dates
    /**
     * Convert a string timestamp or a date into a javascript {@link Date}.
     *
     * It can return invalid dates if the {@link input} string is not valid.
     * @param {string} input
     */
    stringToDate(input){
        //checking if the input is numeric and in case converting it to a number
        if(/^[0-9]*$/.test(input)){
            input = parseInt(input, 10)
        }

        //converting it to a date
        return new Date(input)
    },

    /**
     * Convert a javascript {@link Date} to a json in format of:
     * {unix:timestamp, utc:utcstring}
     * @param {Date} date
     */
    dateToJson(date){
        if(isNaN(date.getTime())){
            return { error : "Invalid Date" }
        }else{
            return {
                unix: date.getTime(),
                utc: date.toUTCString(),
            }
        }
    },
    //#endregion

}
