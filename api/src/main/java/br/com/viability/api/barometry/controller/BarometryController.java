package br.com.viability.api.barometry.controller;

import br.com.viability.api.barometry.dto.BarometryResponseDto;
import br.com.viability.api.barometry.infra.BarometricSensor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/barometry")
public class BarometryController {

    private final BarometricSensor barometricSensor;

    @GetMapping
    public ResponseEntity<BarometryResponseDto> getBarmetry() {
        return ResponseEntity.ok(barometricSensor.performMeasurement());
    }
}
