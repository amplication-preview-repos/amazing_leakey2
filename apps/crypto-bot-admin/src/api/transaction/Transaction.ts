import { Account } from "../account/Account";
import { CryptoCurrency } from "../cryptoCurrency/CryptoCurrency";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  cryptoCurrency?: CryptoCurrency | null;
  id: string;
  status?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
};
