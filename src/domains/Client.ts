import Adresse from "./Adresse";
import Company from "./Company";
import Consultant from "./Consultant";
import Prestation from "./Prestation";

export default interface Client {
  id: number;
  socialReason: string;
  company: Company;
  adresse: Adresse;
  consultants: Set<Consultant>;
  prestation: Prestation;
}
