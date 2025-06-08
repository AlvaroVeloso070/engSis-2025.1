import { ReactNode, useState } from "react";
import { Glyph, Icon, IconSize } from "./Icons";
import { coerceValue } from "@/common/utils";

export default function DataCard({
  title,
  data,
  data2,
  dataTemplate,
  unitPlacement,
  unit,
  unit2,
  className,
  titleSize = "sm",
  loading,
}: {
  title: string;
  data: string | number | null | undefined;
  data2?: string | number | null | undefined;
  dataTemplate?: (
    value: string | number | null | undefined,
    unit: string
  ) => ReactNode;
  unitPlacement: "start" | "end";
  unit: string;
  unit2?: string;
  className?: string;
  titleSize?: "sm" | "xs";
  loading?: boolean;
}) {
  const [currentUnit, setCurrentUnit] = useState(unit);

  const templateSelector = dataTemplate || defaultDataTemplate;

  const currentData = currentUnit === unit ? data : data2;

  return (
    <div className={`flex flex-col ${className}`}>
      <p
        className={`${
          titleSize === "sm" ? "text-textxs" : "text-text2xs"
        } font-medium text-label-light-secondary`}
      >
        {title}
      </p>

      <div className="flex items-center">
        {unitPlacement === "start" && (
          <p className="text-textxs font-regular text-label-light-tertiary mb-[-3px]">
            {unit}
          </p>
        )}
        &nbsp;
        <div
          className={`text-textmd font-semibold text-label-light-primary ${
            loading ? "animate-pulse" : ""
          }`}
        >
          {templateSelector(currentData, currentUnit)}
        </div>
        {unitPlacement === "end" && (
          <>
            &nbsp;
            <span
              className="group inline-flex cursor-default"
              onClick={() => {
                if (unit2 && data2)
                  setCurrentUnit(currentUnit === unit ? unit2 : unit);
              }}
            >
              <p
                data-multi={!!unit2 && !!data2}
                className="text-textxs font-regular text-label-light-tertiary data-[multi=true]:group-hover:text-label-light-secondary mb-[-3px]"
              >
                {currentUnit}
              </p>
              {!!unit2 && !!data2 && (
                <Icon
                  className="ml-spacing-2 mt-px"
                  glyph={Glyph.ChevronUpDown}
                  size={IconSize.XSmall}
                  primaryColor="fill-label-light-secondary group-hover:fill-brand-500"
                />
              )}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

const defaultDataTemplate = (value: string | number | null | undefined) => {
  if (value === null || value === undefined) {
    return <span />;
  }
  const formattedValue =
    typeof value === "number" ? formatNumber(value, 2, true) : value;
  if (typeof value === "string") {
    return <span>{value}</span>;
  }
  return <span>{formattedValue}</span>;
};

const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && !isNaN(value);
};

export function formatNumber(
  value: string | number | null,
  minDecimals: number,
  allowNull: boolean,
  isPercentage = false
): string {
  minDecimals = coerceValue(minDecimals, 0, 8);
  if (typeof value === "number") {
    return (
      isPercentage
        ? (Math.abs(value) <= 0.000001 ? 0 : value) * 100
        : Math.abs(value) <= 0.000001
        ? 0
        : value
    ).toLocaleString("pt-BR", {
      minimumFractionDigits: minDecimals,
      maximumFractionDigits: minDecimals,
    });
  } else if (typeof value === "string") {
    if (!value) {
      return allowNull ? "" : "0,00";
    } else {
      value = value.replace(/\D/g, "");
      if (value === "") return allowNull ? "" : "0,00";
      return (parseInt(value) / 10 ** minDecimals).toLocaleString("pt-BR", {
        minimumFractionDigits: minDecimals,
      });
    }
  } else if (value === null && !allowNull) return "0,00";
  else return "";
}
