import * as _ from 'lodash';

export default class Errors {

  private static errors = [
    {
      "code": "auth/invalid-email", "message": "El email no es correcto"
    },
    {
      "code": "auth/wrong-password", "message": "La contraseña no es correcta"
    },
    {
      "code": "auth/no-credentials", "message": "Proporciona tus credenciales de inicio de sesión"
    }
  ];

  public static findErrorByCode(code: string): any {
    return _.find(this.errors, {code: code});
  }

  public static noCredentialsError(): any {
    return this.findErrorByCode('auth/no-credentials');
  }
}



