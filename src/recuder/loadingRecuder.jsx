export const loadingRecuder = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case "DATA": {
      return {
        ...state,
        data: {...action.data}
      }
    }
    case "SHOW_LOADING": {
      return {
        ...state,
        loading: true,
      }
    }
    case "HIDEN_LOADING": {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}