package br.com.viability.api.soilAnalysis.controller;

import br.com.viability.api.soilAnalysis.dto.SoilAnalysisResponseDto;
import br.com.viability.api.soilAnalysis.infra.SoilAnalysis;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/soil")
public class SoilAnalysisController {

    private final SoilAnalysis soilAnalysis;

    @GetMapping
    public ResponseEntity<SoilAnalysisResponseDto> getSoilAnalysis() {
        return ResponseEntity.ok(soilAnalysis.getAnalysis());
    }
}
