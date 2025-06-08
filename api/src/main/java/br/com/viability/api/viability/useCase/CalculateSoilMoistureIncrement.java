package br.com.viability.api.viability.useCase;

import br.com.viability.api.viability.dto.RangePercent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculateSoilMoistureIncrement extends CalculateIncrement{
    public CalculateSoilMoistureIncrement() {
        this.calculatedObjet = "Soil Moisture";
        this.ranges = List.of(
                new RangePercent(0.0, 2.0, 0.05),
                new RangePercent(2.0, 6.0, 0.1),
                new RangePercent(6.0, 10.0, 0.12),
                new RangePercent(10.0, null, 0.2)
        );
    }
}
