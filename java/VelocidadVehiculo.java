package ejer8;

import java.util.Scanner;

public class VelocidadVehiculo {

    public static void main(String[] args) {
        float distance, time, speed;

        Scanner objLector = new Scanner(System.in);

        System.out.println("Distancia recorrida (en kms): ");
        distance = objLector.nextFloat();

        System.out.println("Tiempo transcurrido (en horas): ");
        time = objLector.nextFloat();

        speed = distance / time;

        System.out.println("La velocidad del vehículo fue " + speed + "km/h");
    }

}
