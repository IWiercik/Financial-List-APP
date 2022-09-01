export const formReducer = (state, action) => {
  const nestedAttributes = { ...state[action.field] };
  switch (action.type) {
    case 'UPDATE VALUE':
      return { ...state, [action.field]: { ...nestedAttributes, value: action.payload } };
    case 'VALIDATE FORM':
      return {
        ...state,
        [action.field]: {
          ...nestedAttributes,
          isValid: action.payload.isValid,
          errorMessage: action.payload.errorMessage,
        },
      };
    case 'HIDE VALIDATION':
      return { ...state, [action.field]: { ...nestedAttributes, isValid: action.payload } };
    default:
      return state;
  }
};
