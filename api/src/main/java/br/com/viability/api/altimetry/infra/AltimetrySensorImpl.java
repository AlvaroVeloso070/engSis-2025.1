package br.com.viability.api.altimetry.infra;

import br.com.viability.api.altimetry.dto.AltimetryResponseDto;
import br.com.viability.api.util.RandomGenerator;
import org.springframework.stereotype.Component;

@Component
public class AltimetrySensorImpl implements AltimetrySensor{
    @Override
    public AltimetryResponseDto getAnalysis() {
        double totalLandArea = RandomGenerator.getRandomDouble(500.0, 1_000_000.0);

        double maxAltitudeDiff;
        if (totalLandArea <= 10_000) {
            maxAltitudeDiff = 10.0;
        } else if (totalLandArea <= 100_000) {
            maxAltitudeDiff = 50.0;
        } else if (totalLandArea <= 1_000_000) {
            maxAltitudeDiff = 200.0;
        } else {
            maxAltitudeDiff = 500.0;
        }

        double lowestPoint = RandomGenerator.getRandomDouble(0.0, 3000.0 - maxAltitudeDiff);
        double highestPoint = lowestPoint + RandomGenerator.getRandomDouble(1.0, maxAltitudeDiff);

        return new AltimetryResponseDto(totalLandArea, highestPoint, lowestPoint);
    }
}
