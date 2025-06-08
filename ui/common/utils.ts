import config from "@/tailwind.config";

/**
 * Coerces a value to ensure it stays above a minimum value.
 * @param value The value to be coerced.
 * @param minValue The minimum value allowed.
 * @template T The type of the values being coerced.
 * @returns The coerced value, or the original value if no coercion is necessary.
 */
export function coerceValue<T extends number>(value: T, minValue: T): T;
/**
 * Coerces a value to ensure it stays within a specified range.
 * @param value The value to be coerced.
 * @param minValue The lower bound of the range.
 * @param maxValue The upper bound of the range.
 * @template T The type of the values being coerced.
 * @returns The coerced value, or the original value if no coercion is necessary.
 */
export function coerceValue<T extends number>(
  value: T,
  minValue: T,
  maxValue: T
): T;
/**
 * Coerces a value to ensure it stays above a minimum value.
 * @param value The value to be coerced.
 * @param minValue The minimum value allowed.
 * @template T The type of the values being coerced.
 * @returns The coerced value, or the original value if no coercion is necessary.
 */
export function coerceValue<T extends number>(
  value: T | null,
  minValue: T
): T | null;
/**
 * Coerces a value to ensure it stays within a specified range.
 * @param value The value to be coerced.
 * @param minValue The lower bound of the range.
 * @param maxValue The upper bound of the range.
 * @template T The type of the values being coerced.
 * @returns The coerced value, or the original value if no coercion is necessary.
 */
export function coerceValue<T extends number>(
  value: T | null,
  minValue: T,
  maxValue: T
): T | null;
export function coerceValue<T extends number>(
  value: T | null,
  minValue: T,
  maxValue?: T
): T | null {
  if (value === null) return null;

  if (value < minValue) {
    return minValue;
  } else if (maxValue != null && value > maxValue) {
    return maxValue;
  } else {
    return value;
  }
}

/**
 * Parses a date string in ISO format (yyyy-mm-dd) into a Date object avoiding timezone issues.
 * @param isoDate The date string in ISO format. It must be in the format yyyy-mm-dd.
 * @returns The parsed Date object.
 */
export function parseISODate(isoDate: string) {
  const parts = isoDate.slice(0, 10).split("-");

  return new Date(
    Date.UTC(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2]),
      0,
      0,
      0,
      0
    )
  );
}

export function parseDateTime(isoDateTime: string) {
  return new Date(isoDateTime + "Z");
}

export function createUTCDate(ticks: number): Date;
export function createUTCDate(year: number, month: number, day: number): Date;
export function createUTCDate(date?: Date): Date;
export function createUTCDate(
  dateOrYearOrTicks?: Date | number,
  month?: number,
  day?: number
) {
  if (typeof dateOrYearOrTicks === "number") {
    if (month === undefined && day === undefined) {
      return new Date(dateOrYearOrTicks);
    } else return new Date(Date.UTC(dateOrYearOrTicks, month!, day!));
  } else if (dateOrYearOrTicks === undefined) {
    const date = new Date();
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
  } else
    return new Date(
      Date.UTC(
        dateOrYearOrTicks.getFullYear(),
        dateOrYearOrTicks.getMonth(),
        dateOrYearOrTicks.getDate(),
        0,
        0,
        0,
        0
      )
    );
}

export function createLocalTime() {
  return new Date();
}

/**
 * Formats a date into a string.
 * @param date The date to format.
 * @param format The format to use.
 * @returns The formatted date string.
 */
export function formatDate(
  date: Date | string | null | undefined,
  format:
    | "short"
    | "long"
    | "full"
    | "written"
    | "time"
    | "shortNumeric" = "short"
): string {
  let actualDate: Date;
  if (date === null || date === undefined) return "";
  if (typeof date === "string") {
    actualDate = parseISODate(date);
  } else {
    actualDate = date;
  }
  switch (format) {
    case "short":
      return (
        monthsPtBrShort[actualDate.getUTCMonth()].toUpperCase() +
        " " +
        actualDate.getUTCFullYear()
      );
    case "shortNumeric":
      return (
        (actualDate.getUTCMonth() + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        }) +
        "/" +
        actualDate.getUTCFullYear()
      );
    case "long":
      return (
        monthsPtBrFull[actualDate.getUTCMonth()] +
        "/" +
        actualDate.getUTCFullYear()
      );
    case "full":
      return (
        actualDate.getUTCDate().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        }) +
        "/" +
        (actualDate.getUTCMonth() + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        }) +
        "/" +
        actualDate.getUTCFullYear()
      );
    case "written":
      return (
        actualDate.getUTCDate().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        }) +
        " de " +
        monthsPtBrFull[actualDate.getUTCMonth()] +
        " de " +
        actualDate.getUTCFullYear()
      );
    case "time":
      return actualDate.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
  }
}

export function getUniqueId(prefix: string = "ID-") {
  return prefix + Math.random().toString(16).substring(2, 9);
}

/**
 * Checks whether two days are equal from two dates.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns `true` if the two days are equal; otherwise, `false`.
 */
export function areDaysEqual(date1: Date, date2: Date) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

/**
 * Checks if a string is null, empty, or whitespace.
 * @param value The string to check.
 * @returns `true` if the string is null, empty, or whitespace; otherwise, `false`.
 */
export function isNullOrWhitespace(value: string | null | undefined) {
  return !value || value.trim() === "";
}

/**
 * Formats a number as a localized string with a fixed number of decimal places.
 * @param value The number to format.
 * @param minDecimals The minimum number of decimal places to include.
 * @param allowNull Whether to return an empty string when the value is null.
 * @param isPercentage Whether the value is a percentage.
 * @returns The formatted number as a string.
 */
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

export function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Win") !== -1) {
    return "Windows";
  } else if (userAgent.indexOf("Mac") !== -1) {
    return "MacOS";
  } else if (userAgent.indexOf("X11") !== -1) {
    return "UNIX";
  } else if (userAgent.indexOf("Linux") !== -1) {
    return "Linux";
  } else {
    return "Unknown";
  }
}
const withAccents = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç";
const withoutAccents = "AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc";
/**
 * Removes portuguese language accents from a string.
 * @param text The string to remove accents from.
 * @returns The string without accents.
 */
export function removePortugueseAccents(text: string) {
  for (let i = 0; i < withAccents.length; i++) {
    text = text.replace(withAccents[i], withoutAccents[i]);
  }
  text = text
    .replace("~", "")
    .replace("^", "")
    .replace("´", "")
    .replace("`", "")
    .replace("¨", "");
  return text;
}

/**
 * Parses a date string into a Date object.
 * @param dateString
 * @returns
 */
export function parseDate(dateString: string) {
  const date = dateString.replace(/ /g, "");

  let match = date.match(regexWithDay);
  if (match) {
    const [, day, month, year] = match;
    const monthIndex = isNaN(parseInt(month))
      ? parseMonth(month)
      : parseInt(month) - 1;
    const fullYear = year.length == 2 ? parseInt(year) + 2000 : parseInt(year);
    return new Date(fullYear, monthIndex, parseInt(day));
  }

  match = date.match(regexWithoutDay);
  if (match) {
    const [, month, year] = match;
    const monthIndex = isNaN(parseInt(month))
      ? parseMonth(month)
      : parseInt(month) - 1;
    const fullYear = year.length == 2 ? parseInt(year) + 2000 : parseInt(year);

    if (monthIndex >= 0 && monthIndex <= 11) {
      return new Date(fullYear, monthIndex);
    }
  }

  const value = new Date(date);
  return isNaN(value.valueOf()) ? null : value;
}

/**
 * Calculates the difference in months between two dates.
 * @param earliest - The earlier date.
 * @param latest - The later date.
 * @returns The number of months between the two dates.
 */
export function getMonthDiff(earliest: Date, latest: Date) {
  return (
    latest.getMonth() -
    earliest.getMonth() +
    12 * (latest.getFullYear() - earliest.getFullYear())
  );
}

/**
 * Checks if a given string is a valid date.
 * @param dateString The string to check.
 * @returns `true` if the string is a valid date; otherwise, `false`.
 */
export function isDate(dateString: string) {
  const date = dateString.replace(/ /g, "");
  return date.match(regexWithDay) || date.match(regexWithoutDay);
}

//internal function to parse month.
function parseMonth(month: string) {
  const indexShort = monthsPtBrShort.findIndex(
    (m) => m.toLowerCase() === month.toLowerCase()
  );
  if (indexShort !== -1) return indexShort;

  const indexFull = monthsPtBrFull.findIndex(
    (m) => m.toLowerCase() === month.toLowerCase()
  );
  if (indexFull !== -1) return indexFull;

  return -1;
}

export function getEnumValues<T extends object>(e: T): T[keyof T][] {
  return Object.values(e).filter((v) => typeof v === "number") as T[keyof T][];
}

export function isMemberOfEnum<T extends object>(e: T, value: string): boolean {
  return Object.values(e).includes(value);
}

/**
 * Starts a comparison chain for a floating-point number.
 * @param num1 The main number to compare.
 * @returns A builder function to compare the first number to another number.
 */
export function compare(num1: number) {
  return {
    /**
     * Compares equality between two floating-point numbers taking precision into account.
     * @param num2 The second number to compare.
     * @param precision The maximum difference between the two numbers for them to be considered equal.
     * @returns `true` if the two numbers are equal within the specified precision; otherwise, `false`.
     */
    isCloseTo: (num2: number, precision = 0.000001) =>
      Math.abs(num1 - num2) < precision,
  };
}

/**
 * Calculates the modulo of two numbers.
 *
 * @param n - The dividend.
 * @param m - The divisor.
 * @returns The modulo of `n` and `m`.
 */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * Checks if a given date string is in a valid format (dd/mm/yyyy) an is a valid date.
 *
 * @param dateString - The date string to validate.
 * @returns `true` if the date string is in a valid format and is valid, `false` otherwise.
 */
export function isValidDateFormat(dateString: string): boolean {
  const parts = dateString.split("/");
  if (parts.length !== 3) return false; // Ensure there are three parts

  const [day, month, year] = parts.map(Number);
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false; // Ensure all parts are numbers

  if (year < 1000 || year > 9999) return false; // Ensure the year is four digits

  // Ensure the month is between 1 and 12
  if (month < 1 || month > 12) return false;

  // Ensure the day is valid for the given month and year
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > lastDayOfMonth) return false;

  return true;
}
const numberFormatOptions = {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
};
/**
 * Abbreviates a number by adding a suffix to represent its magnitude.
 * @param value - The number to be abbreviated.
 * @returns The abbreviated string representation of the number.
 */
export function numberAbbreviation(value: number): string {
  if (value < 0) {
    return `-${numberAbbreviation(value * -1)}`;
  }
  if (value > 999999999) {
    return `${(value / 1000000000).toLocaleString(
      "pt-BR",
      numberFormatOptions
    )}B`;
  } else if (value > 999999) {
    return `${(value / 1000000).toLocaleString("pt-BR", numberFormatOptions)}M`;
  } else if (value > 999) {
    return `${(value / 1000).toLocaleString("pt-BR", numberFormatOptions)}K`;
  } else if (value === 0) {
    return "0";
  } else {
    return formatNumber(value, 2, false);
  }
}

/**
 * Adds the specified number of months to the given date.
 * @param date The date to add months to.
 * @param months The number of months to add.
 * @returns The new date after adding the specified number of months.
 */
export function addMonths(date: Date, months: number) {
  const newDate = new Date(date);
  if (months === 0) return newDate;
  else {
    const month = newDate.getMonth();
    const operation = months > 0 ? 1 : -1;
    newDate.setMonth(date.getMonth() + months);
    while (newDate.getMonth() === month) {
      newDate.setDate(newDate.getDate() + operation);
    }
  }

  return newDate;
}

/** Represents a type that only allows numbers. */
export type NumbersKeysOnly<T extends object> = {
  /** Represents the key of a number property. */
  [K in keyof T]: T[K] extends number
    ? K
    : T[K] extends number | null
    ? K
    : never;
}[keyof T];

/** Represents a type that only allows numbers. */
export type NumbersOnly<T extends object> = {
  /** Represents the key of a number property. */
  [K in NumbersKeysOnly<T>]: T[K];
};

/** Makes a subset of keys in T optional. */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Represents a type that only allows a given type for fields.
 */
export type Filter<Source, Type> = Pick<
  Source,
  {
    [K in keyof Source]: Source[K] extends Type
      ? K
      : Source[K] extends Type | null
      ? K
      : never;
  }[keyof Source]
>;

/**
 * Represents a type that makes all properties of the original type readonly.
 * @template T - The original type.
 */
export type ReadOnly<out T extends object> = {
  readonly [K in keyof T]: T[K];
};

/**
 * Represents a type that makes all properties of the original type optional, including nested properties.
 * @template T - The original type.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * A utility type that checks if two types are exactly the same.
 *
 * This type will resolve to the type `A` if `A` and `B` are exactly the same type.
 * Otherwise, it will resolve to `never`.
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 */
export type Exact<A, B> = A extends B ? (B extends A ? A : never) : never;

const regexWithDay = /^(\d{2})[/-](\d{2}|[a-zA-ZÀ-ü]{3,9})[/-](\d{2}|\d{4})$/;
const regexWithoutDay = /^(\d{2}|[a-zA-ZÀ-ü]{3,9})[/-](\d{2}|\d{4})$/;
export const monthsPtBrShort = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];
export const monthsPtBrFull = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/**
 * Convert a tailwind color to a hex color.
 * @param tailwindColor the color in tailwind (can be with or without modifiers like "bg").
 * @returns Returns the color value in hex.
 */
export function tailwindToHex(tailwindColor: string) {
  const colorObject = config;
  const values = tailwindColor.split("-");
  let typeColor = "";
  let colorValue = "";
  if (
    // filter to exclude any tailwind modifier words
    values[0] === "bg" ||
    values[0] === "text" ||
    values[0] === "fill" ||
    values[0] === "border" ||
    values[0] === "ring" ||
    values[0] === "divide" ||
    values[0] === "placeholder" ||
    values[0] === "from" ||
    values[0] === "via" ||
    values[0] === "to"
  ) {
    typeColor = values[1];
    colorValue = values[2];
  } else {
    typeColor = values[0];
    colorValue = values[1];
  }
  const color = (
    colorObject.theme?.extend?.colors as Record<string, Record<string, string>>
  )?.[typeColor]?.[colorValue];
  return color;
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
