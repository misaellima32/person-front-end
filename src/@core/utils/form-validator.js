export const invalidFeedbackCharacters = (value, min) => {
  if (value.length > min) {
    return `Preencha pelo menos ${min} caracteres.`;
  }
  return "Esse campo não pode ficar vazio.";
};

export const state = (value, min) => {
  return value.length >= min;
};
