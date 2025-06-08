package br.com.viability.api.viability.useCase;

import br.com.viability.api.viability.dto.RangePercent;

import java.util.List;

public abstract class CalculateIncrement {

    protected List<RangePercent> ranges;
    protected String calculatedObjet;

    public Double execute(Double value) {
        return ranges.stream()
                .filter(range -> range.isApplicable(value))
                .map(RangePercent::percentage)
                .findFirst()
                .orElseThrow(() -> new RuntimeException(String.format("{} Range not found", calculatedObjet)));
    }
}
