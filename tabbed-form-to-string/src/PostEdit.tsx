import { Edit, TabbedForm, TextInput } from "react-admin";

const PostEditForm = () => {
  return [
    <TabbedForm.Tab label="Page 1" key="page1">
      <TextInput source="id" />
    </TabbedForm.Tab>,
    <TabbedForm.Tab label="Page 2" key="page2">
      <TextInput source="title" />
    </TabbedForm.Tab>,
    <TabbedForm.Tab label="Page 3" key="page3">
      <TextInput source="content" />
    </TabbedForm.Tab>,
  ];
};

export const PostEdit = () => (
  <Edit>
    <TabbedForm>
      {/* Bug demonstration: */}
      {/* The currently active code works: */}
      {PostEditForm()}
      {/* But if we use the following code instead, it will not work: */}
      {/*<PostEditForm />*/}
    </TabbedForm>
  </Edit>
);
