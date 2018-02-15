import { Injectable } from '@angular/core';
import { Firebase } from '../../config/FirebaseConfig';
import {Auth} from '../../models/Auth';
@Injectable()
export class FirebaseServiceProvider {

  constructor() {
  }

  public async loginWithEmailAndPassword(user: Auth): Promise<any> {
    return await Firebase.auth().signInWithEmailAndPassword(user.username, user.password)
      .catch((error) => error);
  }

  public async logout(): Promise<void> {
    return await Firebase.auth().signOut();
  }
}
