package br.com.viability.api.altimetry.controller;

import br.com.viability.api.altimetry.dto.AltimetryResponseDto;
import br.com.viability.api.altimetry.infra.AltimetrySensor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/altimetry")
public class AltimetryController {

    private final AltimetrySensor altimetrySensor;

    @GetMapping
    public ResponseEntity<AltimetryResponseDto> getAltimetry() {
        return ResponseEntity.ok(altimetrySensor.getAnalysis());
    }
}
