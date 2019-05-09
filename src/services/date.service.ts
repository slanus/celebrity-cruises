export class DateService {
  private _months: Month[];

  constructor() {
    this._months = this.loadMonths();
  }

  private loadMonths(): Month[] {
    return [
      {
        number: 1,
        name: "January"
      },
      {
        number: 2,
        name: "February"
      },
      {
        number: 3,
        name: "March"
      },
      {
        number: 4,
        name: "April"
      },
      {
        number: 5,
        name: "May"
      },
      {
        number: 6,
        name: "June"
      },
      {
        number: 7,
        name: "July"
      },
      {
        number: 8,
        name: "August"
      },
      {
        number: 9,
        name: "September"
      },
      {
        number: 10,
        name: "October"
      },
      {
        number: 11,
        name: "November"
      },
      {
        number: 12,
        name: "December"
      }
    ];
  }

  listMonths(): Month[] {
    return this.loadMonths();
  }

  listDays(): number[] {
    let arrDays = [];
    for (let index = 1; index <= 31; index++) {
      arrDays.push(index);
    }

    return arrDays;
  }

  listYears(): number[] {
    return [2019, 2020, 2021, 2022];
  }
}
