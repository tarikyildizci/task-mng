import { Icon } from 'components/Icon/Icon'
import React, {
  forwardRef,
  ForwardedRef,
  useState,
  useRef,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from 'store/boardSlice'
import { Priority, TaskTypes } from 'types/types'

interface NewTaskProps {
  onClose: () => void
  columnId: string
}

export const NewTask: React.FC<NewTaskProps> = ({ onClose, columnId }) => {
  const addRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>(1)
  const [storyPoints, setStoryPoints] = useState<number>()
  const [type, setType] = useState<Exclude<TaskTypes, 'SPRINT' | 'TEAM'>>(
    TaskTypes.TASK
  )

  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setDescription(e.target.value)
  }
  const handleTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setType(
      Number(e.target.value as unknown) as Exclude<TaskTypes, 'SPRINT' | 'TEAM'>
    )
  }

  const handlePriorityChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPriority(+e.target.value as Priority)
  }

  const handleStoryPointsChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setStoryPoints(+e.target.value)
  }

  const onSubmit = () => {
    dispatch(
      addTask({
        columnId,
        description,
        priority,
        type,
        storyPoints,
      })
    )
    onClose()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!addRef.current?.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="new-task-wrapper">
      <form ref={addRef} className="new-task">
        <input
          type="text"
          name="task-description"
          value={description}
          placeholder="Task Description"
          onChange={handleDescriptionChange}
          ref={inputRef}
        />
        <select value={type} onChange={handleTypeChange}>
          <option value={TaskTypes.TASK}>TASK</option>
          <option value={TaskTypes.EPIC}>EPIC</option>
        </select>
        <input
          type="number"
          placeholder="Story Points"
          value={storyPoints}
          onChange={handleStoryPointsChange}
        />
        <div className="priority">
          <p>Priority: </p>
          <div className="radio-group">
            <input
              type="radio"
              name="priority"
              value={1}
              checked={priority === 1}
              onChange={handlePriorityChange}
            />
            <input
              type="radio"
              name="priority"
              value={2}
              checked={priority === 2}
              onChange={handlePriorityChange}
            />
            <input
              type="radio"
              name="priority"
              value={3}
              checked={priority === 3}
              onChange={handlePriorityChange}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="secondary" onClick={onClose}>
            Cancel
          </button>
          <button onClick={onSubmit}>Add Task</button>
        </div>
      </form>
    </div>
  )
}
