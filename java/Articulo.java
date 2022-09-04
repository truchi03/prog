package ejer9;

import java.util.Scanner;

public class Articulo {
    public static void main(String[] args) {
        Scanner objLector = new Scanner(System.in);

        int cantidad;
        float valorArticulo, valorBruto, iva, netoVenta;

        System.out.println("Cantidad de unidades vendidas: ");
        cantidad = objLector.nextInt();

        System.out.println("Valor del artículo: ");
        valorArticulo = objLector.nextFloat();

        valorBruto = cantidad * valorArticulo;

        System.out.println("Porcentaje de IVA: ");
        iva = (objLector.nextFloat() / 100) * valorBruto;

        System.out.println("------------------------------");
        System.out.println("Valor bruto: " + valorBruto);
        System.out.println("IVA: " + iva);
        System.out.println("Valor neto: " + (valorBruto + iva));

    }
}
