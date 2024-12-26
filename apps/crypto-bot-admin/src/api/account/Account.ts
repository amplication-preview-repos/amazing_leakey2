import { CryptoCurrency } from "../cryptoCurrency/CryptoCurrency";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Account = {
  balance: number | null;
  createdAt: Date;
  cryptoCurrency?: CryptoCurrency | null;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
