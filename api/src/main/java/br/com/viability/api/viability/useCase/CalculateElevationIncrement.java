package br.com.viability.api.viability.useCase;

import br.com.viability.api.viability.dto.RangePercent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculateElevationIncrement extends CalculateIncrement {
    public CalculateElevationIncrement() {
        this.calculatedObjet = "Elevation";
        this.ranges = List.of(
                new RangePercent(0.0, 10.0, 0.05),
                new RangePercent(10.0, 20.0, 0.1),
                new RangePercent(20.0, 30.0, 0.12),
                new RangePercent(30.0, 40.0, 0.15),
                new RangePercent(40.0, null, 0.2)
        );
    }
}
