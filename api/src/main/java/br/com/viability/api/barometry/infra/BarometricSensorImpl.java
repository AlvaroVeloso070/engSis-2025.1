package br.com.viability.api.barometry.infra;

import br.com.viability.api.barometry.dto.BarometryResponseDto;
import br.com.viability.api.util.RandomGenerator;
import org.springframework.stereotype.Component;

@Component
public class BarometricSensorImpl implements BarometricSensor {

    @Override
    public BarometryResponseDto performMeasurement() {
        return new BarometryResponseDto(RandomGenerator.getRandomDouble(940, 1070));
    }
}
