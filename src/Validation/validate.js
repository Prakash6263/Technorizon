
let isValid=function(value){
    if (typeof value ==='undefined' || typeof value === null) return false
    if(typeof value === 'String' & value.trim().length===0) return false

    return true
}

let isvalidRequestBody=function(requestBody){
   return Object.keys(requestBody).length !==0
}
let isCheckPhone=function(number){
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(number)) {
        return true
    }
    return false
}


module.exports={
    isValid,
    isvalidRequestBody,
    isCheckPhone
}