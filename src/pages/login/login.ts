import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import {Auth} from '../../models/Auth';
import Errors from '../../config/Errors';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: Auth = {};

  private loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private firebaseServiceProvider: FirebaseServiceProvider,
              private alertController: AlertController,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    this.loading = this.loadingController.create({
      content: 'Comprobando tus credenciales ...'
    });
  }

  public async login(): Promise<void> {
    if (this.areCredentialsProvided(this.user)) {
      this.loading.present();
      const response = await this.firebaseServiceProvider.loginWithEmailAndPassword(this.user);
      this.checkIfLoginSuccesful(response);
      this.loading.dismiss();
    } else {
      this.showLoginFailAlert(Errors.noCredentialsError().message);
    }
  }

  private showLoginFailAlert(message: string): void {
    const alert = this.alertController.create({
      title: 'Revise sus credenciales de incio de sesión',
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'Dismiss'
        }
      ]
    });
    alert.present();
  }

  private checkIfLoginSuccesful(response: any): void {
    if (response.code != undefined) {
      this.showLoginFailAlert(Errors.findErrorByCode(response.code).message);
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

  private areCredentialsProvided(user: Auth): boolean {
    return user.username != undefined && user.password != undefined;
  }

}
