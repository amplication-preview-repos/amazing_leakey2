import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BotCommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commandText" source="commandText" />
        <TextInput label="description" multiline source="description" />
        <div />
      </SimpleForm>
    </Create>
  );
};
