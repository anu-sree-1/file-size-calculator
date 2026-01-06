export type Unit = "B" | "KB" | "MB" | "GB";

const UNIT_MAP: Record<Unit, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
};

export type ConversionResult = Record<Unit, number>;

export function convertSize(
  value: string | number,
  unit: Unit
): ConversionResult | null {
  if (value === "" || isNaN(Number(value))) return null;

  const bytes = Number(value) * UNIT_MAP[unit];

  return {
    B: bytes,
    KB: bytes / UNIT_MAP.KB,
    MB: bytes / UNIT_MAP.MB,
    GB: bytes / UNIT_MAP.GB,
  };
}
