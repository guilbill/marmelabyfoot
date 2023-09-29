import buildHasuraProvider from "ra-data-hasura";
import { useEffect, useState } from "react";
import {
  Admin,
  DataProvider,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";

export const App = () => {
  const [dataProvider, setDataprovider] = useState<DataProvider>();
  useEffect(() => {
    buildHasuraProvider({
      clientOptions: {
        uri: "https://ilsxliaymysxavqmkduu.graphql.eu-central-1.nhost.run/v1",
      },
    }).then((dataProvider) => {
      setDataprovider(dataProvider);
    });
  });
  if (!dataProvider) {
    return <div>Loading...</div>;
  }
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="player"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="team"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="score"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
};
