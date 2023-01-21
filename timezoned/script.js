function getHereTime()
{
    let date = new Date();
    alert(date.toLocaleTimeString('en-US'))
}

function getTime(id)
{
    let nowdate = new Date()
    let utcDate = new Date(Date.parse(nowdate.toUTCString()))
    utcDate.setHours(nowdate.getUTCHours() + parseInt(document.getElementById(id).value)) //utcDate is now according to time zone
    alert(utcDate.toLocaleTimeString('en-US'))
}