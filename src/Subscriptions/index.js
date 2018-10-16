import { registerSubscription } from '../airan'

export const counter = registerSubscription(":counter", state => state);
registerSubscription(":counterX100", state => state * 100);
