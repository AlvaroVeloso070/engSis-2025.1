package br.com.viability.api.viability.useCase;

import br.com.viability.api.viability.dto.ViabilityRequestDto;
import br.com.viability.api.viability.dto.ViabilityResponseDto;
import br.com.viability.api.viability.exception.InvalidFieldValueException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CalculateViability {

    private final Double BASE_VALUE_PER_M2 = 100.0;
    private final CalculateSoilMoistureIncrement calculateSoilMoistureIncrement;
    private final CalculateElevationIncrement calculateElevationIncrement;

    public ResponseEntity<ViabilityResponseDto> execute(ViabilityRequestDto viabilityRequestDto) {
        validateRequest(viabilityRequestDto);

        Double soilMoistureIncrement = calculateSoilMoistureIncrement.execute(viabilityRequestDto.soilMoisture());
        Double elevationIncrement = calculateElevationIncrement.execute(viabilityRequestDto.highestPoint() - viabilityRequestDto.lowestPoint());
        Double soilTypeIncrement = viabilityRequestDto.soilType().getPercentageIncrease();

        Double costPerM2 = calculateCostPerM2(soilMoistureIncrement, elevationIncrement, soilTypeIncrement);
        Double totalCost = calculateTotalCost(costPerM2, viabilityRequestDto.totalLandArea());

        return ResponseEntity.ok(new ViabilityResponseDto(totalCost, costPerM2));
    }

    private Double calculateCostPerM2(Double soilMoistureIncrement, Double elevationIncrement, Double soilTypeIncrement) {
        return BASE_VALUE_PER_M2 * (soilMoistureIncrement + elevationIncrement + soilTypeIncrement);
    }

    private Double calculateTotalCost(Double valuePerM2, Double totalLandArea) {
        return valuePerM2 * totalLandArea;
    }

    private void validateRequest(ViabilityRequestDto request) {
        if (request == null) {
            throw new InvalidFieldValueException("request", "Request body cannot be null");
        }

        if (request.highestPoint() == null) {
            throw new InvalidFieldValueException("highestPoint", "Highest point cannot be null");
        }

        if (request.lowestPoint() == null) {
            throw new InvalidFieldValueException("lowestPoint", "Lowest point cannot be null");
        }

        if (request.highestPoint() <= request.lowestPoint()) {
            throw new InvalidFieldValueException("highestPoint",
                "Highest point must be greater than lowest point");
        }

        if (request.soilMoisture() == null) {
            throw new InvalidFieldValueException("soilMoisture", "Soil moisture cannot be null");
        }

        if (request.soilMoisture() < 0 || request.soilMoisture() > 100) {
            throw new InvalidFieldValueException("soilMoisture",
                "Soil moisture must be between 0 and 100%");
        }

        if (request.totalLandArea() == null) {
            throw new InvalidFieldValueException("totalLandArea", "Total land area cannot be null");
        }

        if (request.totalLandArea() <= 0) {
            throw new InvalidFieldValueException("totalLandArea",
                "Total land area must be greater than zero");
        }

        if (request.soilType() == null) {
            throw new InvalidFieldValueException("soilType", "Soil type cannot be null");
        }
    }
}
