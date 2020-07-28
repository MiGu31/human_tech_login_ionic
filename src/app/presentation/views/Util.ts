export class Util {

    // Parse a numberDate to date
    public static getDate(numberDate: number){
        return this.formatDate(new Date(numberDate));
    }

    // Parse a date to simple Date YYYY/MM/DD
    private static formatDate(date: Date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }

}
