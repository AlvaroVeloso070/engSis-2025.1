package br.com.viability.api.util;

import java.util.concurrent.ThreadLocalRandom;

public class RandomGenerator {

    public static Double getRandomDouble(double min, double max) {
        return Math.round(ThreadLocalRandom.current().nextDouble(min, max) * 10) / 10.0;
    }
}
