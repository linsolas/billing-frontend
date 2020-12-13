import Client from "./Client";
import Consultant from "./Consultant";

export default interface Prestation {
  id: number;
  nbJoursEffectue: number;
  tarif: number;
  numeroCommande: string;
  delaiPaiement: number;
  consultant: Consultant;
  client: Client;
}
