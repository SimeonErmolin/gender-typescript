import React from 'react'
import { UserInput } from './modules for gender/UserInput'
import { BtnGetGender } from './modules for gender/BtnGetGender'
import { Result } from './modules for gender/Result'
import { UserWarning } from './modules for gender/UserWarning'
import {useDispatch, useSelector} from "react-redux";
import {searchCountry, searchGender} from "./modules for gender/network";
import {changeName} from "./redux";
import {AppDispatch, RootState} from "./index";

export function App() {
  const name = useSelector((state: RootState) => state.genderApp.userName);
  const warning = useSelector((state: RootState) => state.genderApp.warning);
  const dispatch = useDispatch<AppDispatch>();

  function sendNameChangeGender(e: any) {
    e.preventDefault();
    dispatch(searchGender(name))
    dispatch(searchCountry(name))
    dispatch(changeName(''))
  }

  return(
      <form onSubmit={sendNameChangeGender}>
        <UserInput />
        <BtnGetGender />
        <Result />
        {warning
            ? <UserWarning warning={warning}/>
            : false
        }
      </form>
  )
}