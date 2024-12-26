import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CryptoCurrencyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CryptoCurrencies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="marketCap" source="marketCap" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
