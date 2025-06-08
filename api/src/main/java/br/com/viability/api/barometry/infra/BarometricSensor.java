package br.com.viability.api.barometry.infra;

import br.com.viability.api.barometry.dto.BarometryResponseDto;

public interface BarometricSensor {
    BarometryResponseDto performMeasurement();
}
