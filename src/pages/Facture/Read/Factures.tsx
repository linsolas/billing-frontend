import Axios from "axios";
import React, { FC, ReactElement, useEffect, useState } from "react";
import Facture from "../../../domains/Facture";
import FactureList from "./FactureList";

interface FacturesState {
    items: Facture[];
    loading: boolean;
}

const Factures: FC<{}> = (): ReactElement => {
  const [state, setState] = useState<FacturesState>({
    loading: false,
    items: [],
  });

  const url: string =
    "http://localhost:8080/factureService/factures/201907311001";

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, loading: true });
      const result = await Axios(url);
      setState({ ...state, items: result.data, loading: false });
    };
    fetchData();
  }, [url]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>Listes des factures</h2>
      <FactureList items={state.items} />
    </>
  );
};

export default Factures;
