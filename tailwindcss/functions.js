module.exports = {
  withOpacity: (variableName) => {
    return ({ opacityValue }) => {
      return opacityValue !== undefined
        ? `rgb(var(${variableName}),${opacityValue})`
        : `rgb(var(${variableName}))`;
    };
  },
};