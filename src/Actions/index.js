import { registerAction } from '../airan'

export const increment  =
    registerAction("increment", (state, payload) => state + 1);

registerAction("apiAnwser", (state, payload) => state + 100);
