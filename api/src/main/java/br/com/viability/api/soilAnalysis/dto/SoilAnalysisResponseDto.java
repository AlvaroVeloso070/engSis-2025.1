package br.com.viability.api.soilAnalysis.dto;

import br.com.viability.api.viability.enums.SoilType;

public record SoilAnalysisResponseDto(
        Double soilMoisture,
        SoilType soilType
) {
}
