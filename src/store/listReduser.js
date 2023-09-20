const initialState = {
  id: 3,
  name: '',
  value: '',
  editMode: false,
  editId: 0,
  list: [
    { id: 0, name: 'Ремонт аккумулятора', value: '2500' },
    { id: 1, name: 'Ремонт экрана', value: '5500' },
    { id: 2, name: 'Ремонт порта', value: '1500' }
  ]
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: ++state.id,
        name: '',
        value: '',
        list: [...state.list, { id: state.id, name: state.name, value: state.value }]
      }

    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SET_VALUE':
      return {
        ...state,
        value: action.payload
      }

    case 'EDIT_ITEM':
      let item = state.list.find(item => item.id === action.payload);

      return {
        ...state,
        value: item.value,
        name: item.name,
        editMode: true,
        editId: action.payload,
      }

    case 'CANCEL_EDIT_ITEM':
      return {
        ...state,
        value: '',
        name: '',
        editMode: false,
        editId: 0,
      }

    case 'SAVE_EDIT_ITEM':
      let itemId = state.list.findIndex(item => item.id === state.editId)
      state.list.splice(itemId, 1, { id: state.editId, name: state.name, value: state.value })

      return {
        ...state,
        value: '',
        name: '',
        editMode: false,
        editId: 0,
      }

    default:
      return state
  }
}

export default listReducer