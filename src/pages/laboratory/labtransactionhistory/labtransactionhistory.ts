import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../../providers/api/api";
import { APIName } from "../../../providers/commonfunction/commonfunction";

/**
 * Generated class for the LabtransactionhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-labtransactionhistory",
  templateUrl: "labtransactionhistory.html"
})
export class LabtransactionhistoryPage {
  transactionlist: any[];
  transactionMaster: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LabtransactionhistoryPage");

    this.api.wsGet(APIName.getAllLabTransaction, "").then((resp: any) => {
      console.log("getDoctorVisitlist : >>", JSON.stringify(resp.data));
      this.transactionMaster = resp.data.patLabAppointmentsPojo;
      console.log(this.transactionMaster);
      this.transactionlist = resp.data.patLabAppointmentsPojo;
    });
  }
}