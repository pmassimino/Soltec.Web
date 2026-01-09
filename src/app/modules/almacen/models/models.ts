export class Articulo  {  
    public id: string = '';
    public nombre: string = '';
    public idFamilia: string = '';
    public idLinea: string | null = null;
    public idSeccionOp: string = '';
    public precioCosto: number = 0;
    public impuestoInterno: number = 0;
    public margenVenta: number = 0;
    public alicuotaIva: number = 0;
    public precioVenta: number = 0;
    public precioVentaFinal: number = 0;
    public idDivisa: number = 0;
    public stock: number = 0;
    public pendRemitir: number = 0;
} 