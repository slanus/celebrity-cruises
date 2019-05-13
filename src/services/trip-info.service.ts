export class TripInfoService {
  private _ships: Ship[];
  private _tripInfo: TripInfo;

  constructor() {
    this._ships = [
      {
        id: 1,
        name: "CELEBRITY CONSTELLATION"
      },
      {
        id: 2,
        name: "ANOTHER SHIP"
      }
    ];
  }

  listShips() {
    return this._ships;
  }

  save(ti: TripInfo): void {
    this._tripInfo = {
      reservationNumber: ti.reservationNumber,
      lastNameOnReservation: ti.lastNameOnReservation,
      rememberInfo: ti.rememberInfo,
      ship: ti.ship,
      month: ti.month,
      day: ti.day,
      year: ti.year
    };
  }

  getTripInfo(): TripInfo {
    return this._tripInfo;
  }
}
