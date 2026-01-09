export class Sujeto {
  public id: string = "";
  public nombre: string = "";
  public numeroDocumento: string = "";
  public numeroIngBruto: string = "";
  public domicilio: string = "";
  public localidad: string = "";
  public idProvincia: string = "";
  public provincia: string = "";
  public idCategoria: string = "";
  public categoria: string = "";
  public idZona: string = "";
  public zona: string = "";
  public codigoPostal: string = "";
  public condicionIva: string = "";
  public condicionIB: string = "";
  public subdiarios: Subdiario[] = [];
}

export class Subdiario {
  constructor(
    public id: string,
    public nombre: string,
    public idDivisa: number
  ) {}
}