export function formatDate(oriDate: string | Date, format: string) {
    if (!oriDate)
        return ''
    let retDate = ''
    let tempDate
    try {
        tempDate = new Date(oriDate)
    }
    catch {
        return oriDate
    }
    let tempDay = `${tempDate.getDate()}`
    tempDay = tempDay.length > 1 ? tempDay : `0${tempDay}`
    let tempMonth = `${tempDate.getMonth() + 1}`
    tempMonth = tempMonth.length > 1 ? tempMonth : `0${tempMonth}`

    retDate = format.includes('YYYY') ? format.replace('YYYY', `${tempDate.getFullYear()}`) : format.replace('YYYY', '')
    retDate = retDate.replace('MM', tempMonth)
    retDate = format.includes('DD') ? retDate.replace('DD', tempDay) : retDate
    
    let tempHours = `${tempDate.getHours()}`
    tempHours = tempHours.length > 1 ? tempHours : `0${tempHours}`
    retDate = retDate.replace('hh', tempHours)

    let tempMinutes = `${tempDate.getMinutes()}`
    tempMinutes = tempMinutes.length > 1 ? tempMinutes : `0${tempMinutes}`
    retDate = retDate.replace('mm', tempMinutes)

    let tempSeconds = `${tempDate.getSeconds()}`
    tempSeconds = tempSeconds.length > 1 ? tempSeconds : `0${tempSeconds}`
    retDate = retDate.replace('ss', tempSeconds)
    
    return retDate
}