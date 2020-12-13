import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FactureItem from "./FactureItem";
import Facture from "../../../domains/Facture";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

interface FactureListProps {
  items: Facture[];
}

const FactureList: FC<FactureListProps> = ({ items }) => {
  const classes = useStyles();
  console.log(items);

  return (
    <div className={classes.root}>
      {items &&
        items.map((facture: Facture, index: number) => (
          <FactureItem key={index} item={facture} />
        ))}
    </div>
  );
};

export default FactureList;
