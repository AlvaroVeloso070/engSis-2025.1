package br.com.viability.api.viability.dto;

import br.com.viability.api.viability.enums.SoilType;

public record ViabilityRequestDto(
    Double highestPoint,
    Double lowestPoint,
    Double soilMoisture,
    Double totalLandArea,
    SoilType soilType
) {
}
