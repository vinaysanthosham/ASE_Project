import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrugslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugslist',
  templateUrl: 'drugslist.html',
})
export class DrugslistPage {

  public drugslist;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugslistPage');
    let dl = [
      "abilify",
      "acyclovir",
      "advil",
      "albuterol",
      "alli diet",
      "allopurinol",
      "amoxicillin",
      "amoxil",
      "ampicillin",
      "antabuse",
      "arimidex",
      "atenolol",
      "augmentin",
      "avana",
      "avanafil",
      "avodart",
      "aygestin",
      "baclofen",
      "benicar",
      "bupropion",
      "buspar",
      "cafergot",
      "celebrex",
      "celexa",
      "cephalexin",
      "chlorthalidone",
      "cialis",
      "cipro",
      "cleocin",
      "clindamycin",
      "clomid",
      "clonidine",
      "cymbalta",
      "diclofenac",
      "effexor",
      "elimite",
      "esomeprazole",
      "flagyl",
      "fluconazole",
      "fourosimide",
      "hydrochlorothiazide",
      "inderal",
      "indocin",
      "indomethacin",
      "keflex",
      "lasix",
      "levitra",
      "lexapro",
      "lipitor",
      "lisinopril",
      "medrol",
      "methotrexate",
      "minoxidil",
      "motilium",
      "motrin",
      "neurontin",
      "nexium",
      "nolvadex",
      "permethrin",
      "prednisolone",
      "prednisone",
      "proscar",
      "provera",
      "prozac",
      "retin-a",
      "rimonabant",
      "robaxin",
      "rogaine",
      "seroquel",
      "sildenafil",
      "strattera",
      "stromectol",
      "suhagra",
      "synthroid",
      "tadacip",
      "tadalafil",
      "tamoxifen",
      "tenormin",
      "toradol",
      "trazodone",
      "tretinoin",
      "triamterene",
      "vermox",
      "viagra",
      "vigara",
      "wellbutrin",
      "yasmin",
      "zithromax",
      "zofran",
      "zoloft"
    ];  
    this.drugslist = dl;
  }

}
