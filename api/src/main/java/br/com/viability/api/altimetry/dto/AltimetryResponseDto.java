package br.com.viability.api.altimetry.dto;

public record AltimetryResponseDto(
        Double totalLandArea,
        Double highestPoint,
        Double lowestPoint
) {
}
