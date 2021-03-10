import moment from 'moment'
//获取本周(第一天是星期一)
export const getNewWeekDate = () => {
    const weekOfDay = parseInt(moment().format('E'));
    const last_monday = moment().subtract(weekOfDay - 1, 'days').format('YYYY-MM-DD');
    const last_sunday = moment().add(7 - weekOfDay, 'days').format('YYYY-MM-DD');
    return `${last_monday}/${last_sunday}`
}

export default {
    getNewWeekDate
}