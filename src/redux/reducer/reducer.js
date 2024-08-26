const initialState = {
  count: 0,
  id: '',
  pw: '',
};

export default function reducer(state = initialState, action) {
  //   if (action.type === 'INCREMENT') {
  //     return { ...state, count: state.count + 1 };
  //   }

  //   return { ...state };

  switch (action.type) {
    case 'LOGIN':
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
}
