package br.com.viability.api.viability.dto;

import java.math.BigDecimal;

public record ViabilityResponseDto(
        BigDecimal totalCost,
        BigDecimal costPerM2
) {
}
