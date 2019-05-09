declare module AppConfig {
  interface Route {
    path: string;
    templateUrl: string;
    controller: string;
  }

  interface Ship {
    id: number;
    description: string;
  }

  interface SaleDate {
    month: number;
    day: number;
    year: number;
  }

  interface TripInfo {
    reservationNumber: number;
    lastNameOnReservation: string;
    ship: string;
    month: number;
    day: number;
    year: number;
  }

  interface Client {
    basePath: string;
    html5Mode: boolean;
    routes: Route[];
    tripInfo: TripInfo;
  }

  export interface Configuration {
    client: Client;
  }
}
