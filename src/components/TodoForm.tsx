import React, {useRef} from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && ref.current!.value) {
      event.preventDefault()
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  const onClickHandler = (event: React.MouseEvent<any>) => {
    if (ref.current!.value) {
      event.preventDefault()
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <form className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active"/>
      <button onClick={onClickHandler} className="btn waves-effect waves-light right" type="submit" name="action">Добавить дело
        <i className="material-icons right">add</i>
      </button>
    </form>
  )
}
