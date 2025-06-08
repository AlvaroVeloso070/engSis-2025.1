package br.com.viability.api.viability.controller;

import br.com.viability.api.viability.dto.ViabilityRequestDto;
import br.com.viability.api.viability.dto.ViabilityResponseDto;
import br.com.viability.api.viability.useCase.CalculateViability;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/viability")
public class ViabilityController {

    private final CalculateViability calculateViability;

    @PostMapping
    public ResponseEntity<ViabilityResponseDto> getViability(@RequestBody ViabilityRequestDto dto) {
        return calculateViability.execute(dto);
    }
}
