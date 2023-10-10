import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";

export const App = () => {
  return (
    <Admin dataProvider={}>
      <Resource
        name="player"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
};
