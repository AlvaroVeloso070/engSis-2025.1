package br.com.viability.api.viability.enums;

import lombok.Getter;

@Getter
public enum SoilType {
    SANDY(0.1),
    SILTY(0.12),
    CLAY(0.15),
    ROCKY(0.17);

    private final Double percentageIncrease;

    SoilType(Double percentageIncrease) {
        this.percentageIncrease = percentageIncrease;
    }
}
