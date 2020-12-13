import Adresse from "./Adresse";
import Client from "./Client";
import Company from "./Company";
import Prestation from "./Prestation";

export default interface Consultant {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  company: Company;
  clients: Set<Client>;
  adresse: Adresse;
  prestation: Prestation;
}
