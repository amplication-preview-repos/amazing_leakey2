import { Account } from "../account/Account";
import { Transaction } from "../transaction/Transaction";

export type CryptoCurrency = {
  accounts?: Array<Account>;
  createdAt: Date;
  id: string;
  marketCap: number | null;
  name: string | null;
  symbolField: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
