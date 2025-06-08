package br.com.viability.api.viability.useCase;

import br.com.viability.api.viability.dto.RangePercent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalculateBarometryIncrement extends CalculateIncrement{

    public CalculateBarometryIncrement() {
        this.calculatedObjet = "Barometric";
        this.ranges = List.of(
                new RangePercent(null, 950.0, 0.25),
                new RangePercent(950.0, 980.0, 0.15),
                new RangePercent(980.0, 1020.0, 0.0),
                new RangePercent(1020.0, 1050.0, 0.1),
                new RangePercent(1050.0, null, 0.2)
        );
    }
}
