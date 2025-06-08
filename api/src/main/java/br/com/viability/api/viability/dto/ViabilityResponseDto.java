package br.com.viability.api.viability.dto;

public record ViabilityResponseDto(
        Double totalCost,
        Double costPerM2
) {
}
