import {useSelector} from "react-redux";
import {RootState} from "../index";

export function Result() {
    const gender = useSelector((state: RootState) => state.genderApp.gender)
    const country = useSelector((state: RootState) => state.genderApp.country)

    return (
    <div>
      <p>Your gender:</p>
      <p>{gender}</p>
      <p>Your country:</p>
      <p>{country}</p>
    </div>
  )
}
