import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,MdModeEdit } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

function TodoListItem({todo , onRemove, onToggle, onInsertToggle,onChangeSelectedTodo }) {
    const { id, text, checked} = todo;

    return(
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick = {() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                
                <div className='text'>{`${id}.${text}`}</div>
            </div>

            <div className='edit' onClick={() => {
                onChangeSelectedTodo(todo)
                onInsertToggle();
            }}>
                <MdModeEdit />
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline  />
            </div>
        </div>
    );
}

export default TodoListItem;