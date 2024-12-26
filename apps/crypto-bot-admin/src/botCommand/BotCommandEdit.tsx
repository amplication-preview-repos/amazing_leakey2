import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BotCommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="commandText" source="commandText" />
        <TextInput label="description" multiline source="description" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
