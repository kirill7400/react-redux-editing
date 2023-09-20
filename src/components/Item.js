import {useDispatch} from "react-redux";

function Item({ id, name, value, edit }) {
  const dispatch = useDispatch();

  return(
    <div className='item'>
      <div>{ name } - { value }</div>
      <button onClick={ () => edit(dispatch)(id) }>Редактировать</button>
    </div>
  )
}

export default Item