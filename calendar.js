class DataService {
  // {year: 2024, month: 'December', day: 'Wed'}
  getCurrentDate() {
    const date = new Date();

    return {
      year: date.getFullYear(),
      month: this.generateMonthes()[date.getMonth()],
      day: this.generateWeekdays()[date.getDay()],
    };
  }
  // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  generateWeekdays() {
    return [...Array(7)].map((_, index) => {
      const date = new Date();

      date.setDate(date.getDate() - date.getDay() + index + 1);

      return date.toLocaleString("en-US", { weekday: "short" });
    });
  }
  // ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  generateMonthes() {
    return [...Array(12).keys()].map((key) =>
      new Date(0, key).toLocaleString("en", {
        month: "long",
      })
    );
  }
}
class Calendar {
  getCurrentDay() {}
  next() {}
  previously() {
    const todayDay = new Data();
  }
}

class Cell {}

const dateService = new DataService();
console.log(dateService.generateWeekdays());
