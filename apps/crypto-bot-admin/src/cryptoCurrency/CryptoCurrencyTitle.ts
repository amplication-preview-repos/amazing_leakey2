import { CryptoCurrency as TCryptoCurrency } from "../api/cryptoCurrency/CryptoCurrency";

export const CRYPTOCURRENCY_TITLE_FIELD = "name";

export const CryptoCurrencyTitle = (record: TCryptoCurrency): string => {
  return record.name?.toString() || String(record.id);
};
