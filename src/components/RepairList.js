import {useDispatch, useSelector} from "react-redux";
import Item from "./Item";
import {addItem, cancelEditItem, editItem, saveEditItem, setName, setValue} from "../store/actions";

function RepairList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.repairList)
  console.log(state)


  return(
    <div className='repairList'>
      <div className='repairList-add'>
        <input value={ state.name } onChange={ (e) => setName(dispatch)(e.target.value) } type="text"/>
        <input value={ state.value } onChange={ (e) => setValue(dispatch)(e.target.value) } type="text"/>
        { !state.editMode ?
          <button onClick={ () => addItem(dispatch)() }>Сохранить</button> :
          <>
            <button onClick={ () => saveEditItem(dispatch)() }>Сохранить</button>
            <button onClick={ () => cancelEditItem(dispatch)() }>Отменить</button>
          </>
        }

      </div>


      { state.list.map(item => <Item key={ item.id } id={ item.id } name={ item.name } value={ item.value } edit={ editItem }/>) }
    </div>
  )
}

export default RepairList