export const formatDate = (
  value,
  formatting = { month: "short", day: "numeric", year: "numeric" }
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat("pt-br", formatting).format(new Date(value));
};

export const typeNumber = (value) => {
  if (!value) {
    return;
  } else if (value === "HOME") {
    return "Residencial";
  } else if (value === "MOBILE") {
    return "Celular";
  } else if (value === "COMMERCIAL") {
    return "Comercial";
  }
};
