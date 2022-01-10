export interface IEbanxCreditCard {
  cardNumber: string;
  cardName: string;
  cardDueDate: string;
  cardCVV: string;
  autoCapture: boolean;
  token: string;
}

export interface IEbanxItem {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
  type: string;
}

export interface IEbanxPaymentDTO {
  name: string;
  email: string;
  document: string;
  customerIp: string;
  address: string;
  streetNumber: string;
  streetComplement: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phoneNumber: string;
  paymentType: string;
  merchantPaymentCode: string;
  dueDate: string;
  createToken: boolean;
  token: string;
  currencyCode: string;
  instalments: string;
  amountTotal: string;
  creditcard: IEbanxCreditCard;
  note: string;
  items: IEbanxItem[];
  deviceId: string;
  eftCode: string;
  notificationUrl: string;
  redirectUrl: string;
  personType: string;
}
