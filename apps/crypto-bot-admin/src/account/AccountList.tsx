import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptoCurrency/CryptoCurrencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
