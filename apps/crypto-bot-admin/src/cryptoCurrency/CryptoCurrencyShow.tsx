import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CRYPTOCURRENCY_TITLE_FIELD } from "./CryptoCurrencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const CryptoCurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="marketCap" source="marketCap" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="cryptoCurrencyId"
          label="Accounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="cryptoCurrency"
              source="cryptocurrency.id"
              reference="CryptoCurrency"
            >
              <TextField source={CRYPTOCURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="cryptoCurrencyId"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="cryptoCurrency"
              source="cryptocurrency.id"
              reference="CryptoCurrency"
            >
              <TextField source={CRYPTOCURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
