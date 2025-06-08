package br.com.viability.api.altimetry.infra;

import br.com.viability.api.altimetry.dto.AltimetryResponseDto;

public interface AltimetrySensor {
    AltimetryResponseDto getAnalysis();
}
