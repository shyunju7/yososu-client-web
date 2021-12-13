import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const yososuApi = {
  getInventoriesInStockOrder: (addr) =>
    api.get(`inventories/stock/?addr=${addr}`, {}),
  getInventoriesInPriceOrder: (addr) =>
    api.get(`/inventories/price/?addr=${addr}`, {}),
};
