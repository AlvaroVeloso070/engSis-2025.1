package br.com.viability.api.soilAnalysis.infra;

import br.com.viability.api.soilAnalysis.dto.SoilAnalysisResponseDto;
import br.com.viability.api.util.RandomGenerator;
import br.com.viability.api.viability.enums.SoilType;
import org.springframework.stereotype.Component;

import java.util.EnumSet;
import java.util.Random;
import java.util.Set;

@Component
public class SoilAnalysisImpl implements SoilAnalysis {

    @Override
    public SoilAnalysisResponseDto getAnalysis() {
        return getRandomAnalysis();
    }

    public SoilAnalysisResponseDto getRandomAnalysis() {
        Random random = new Random();
        double soilMoisture = RandomGenerator.getRandomDouble(0, 40);
        SoilType[] soilTypes = getSoilTypesByMoisture(soilMoisture);
        SoilType randomSoilType = soilTypes[random.nextInt(soilTypes.length)];

        return new SoilAnalysisResponseDto(soilMoisture, randomSoilType);
    }

    public SoilType[] getSoilTypesByMoisture(double soilMoisture) {
        Set<SoilType> result = EnumSet.noneOf(SoilType.class);

        if (soilMoisture >= 0 && soilMoisture <= 5) {
            result.add(SoilType.ROCKY);
        }
        if (soilMoisture >= 2 && soilMoisture <= 15) {
            result.add(SoilType.SANDY);
        }
        if (soilMoisture >= 10 && soilMoisture <= 30) {
            result.add(SoilType.SILTY);
        }
        if (soilMoisture >= 20 && soilMoisture <= 40) {
            result.add(SoilType.CLAY);
        }

        return result.toArray(new SoilType[0]);
    }
}
