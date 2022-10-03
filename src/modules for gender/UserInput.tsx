import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../redux";
import {AppDispatch, RootState} from "../index";

export function UserInput() {
  const name = useSelector((state: RootState) => state.genderApp.userName)
  const dispatch = useDispatch<AppDispatch>()

  function handleChange(e: any) {
    dispatch(changeName(e.target.value))
  }

  return (
    <input type="text" placeholder="Enter the name" onChange={handleChange} value={name} />
  )
}
