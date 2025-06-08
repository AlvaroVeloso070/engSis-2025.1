package br.com.viability.api.soilAnalysis.infra;

import br.com.viability.api.soilAnalysis.dto.SoilAnalysisResponseDto;

public interface SoilAnalysis {
    SoilAnalysisResponseDto getAnalysis();
}
