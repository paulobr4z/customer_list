export interface ICustomer {
  name: {
    first: string;
    last: string;
  }
  phone: string;
  email: string;
  location: {
    country: string;
    state: string;
  }
  picture: {
    large: string;
  }
}