import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { CryptoCurrencyList } from "./cryptoCurrency/CryptoCurrencyList";
import { CryptoCurrencyCreate } from "./cryptoCurrency/CryptoCurrencyCreate";
import { CryptoCurrencyEdit } from "./cryptoCurrency/CryptoCurrencyEdit";
import { CryptoCurrencyShow } from "./cryptoCurrency/CryptoCurrencyShow";
import { BotCommandList } from "./botCommand/BotCommandList";
import { BotCommandCreate } from "./botCommand/BotCommandCreate";
import { BotCommandEdit } from "./botCommand/BotCommandEdit";
import { BotCommandShow } from "./botCommand/BotCommandShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"CryptoBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="CryptoCurrency"
          list={CryptoCurrencyList}
          edit={CryptoCurrencyEdit}
          create={CryptoCurrencyCreate}
          show={CryptoCurrencyShow}
        />
        <Resource
          name="BotCommand"
          list={BotCommandList}
          edit={BotCommandEdit}
          create={BotCommandCreate}
          show={BotCommandShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
