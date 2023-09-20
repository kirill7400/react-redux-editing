export const addItem = (dispatch) => () => {
  const action = {
    type: 'ADD_ITEM'
  }

  return dispatch(action)
}

export const setName = (dispatch) => (name) => {
  const action = {
    type: 'SET_NAME',
    payload: name
  }

  return dispatch(action)
}

export const setValue = (dispatch) => (value) => {
  const action = {
    type: 'SET_VALUE',
    payload: value
  }

  return dispatch(action)
}

export const editItem = (dispatch) => (id) => {
  const action = {
    type: 'EDIT_ITEM',
    payload: id
  }

  return dispatch(action)
}

export const saveEditItem = (dispatch) => (id) => {
  const action = {
    type: 'SAVE_EDIT_ITEM',
    payload: id
  }

  return dispatch(action)
}

export const cancelEditItem = (dispatch) => (id) => {
  const action = {
    type: 'CANCEL_EDIT_ITEM',
    payload: id
  }

  return dispatch(action)
}

export const filterItem = (dispatch) => (filter) => {
  const action = {
    type: 'FILTER_ITEM',
    payload: filter
  }

  return dispatch(action)
}