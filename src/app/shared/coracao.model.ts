export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = "https://github.com/regis404/Images/blob/master/coracao_cheio.png?raw=true",
    public urlCoracaoVazio: string = "https://github.com/regis404/Images/blob/master/coracao_vazio.png?raw=true"
  ) {}
  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
