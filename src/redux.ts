import {createSlice} from "@reduxjs/toolkit";
import {searchCountry, searchGender} from "./modules for gender/network";
import {IAction, IState} from "./models";

const initialState: IState = {
    userName: '',
    gender: 'Нигер',
    country: 'Бездомный',
    warning: ''
}

const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {
        changeName(state: IState, action) {
            state.userName = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchGender.fulfilled, (state: IState, action: IAction) => {
                state.gender = action.payload
                state.warning = ''
            })
            .addCase(searchCountry.fulfilled, (state: IState, action: IAction) => {
                state.country = action.payload
                state.warning = ''
            })
            .addCase(searchGender.rejected, (state: IState) => {
                state.gender = ''
                state.country = ''
                state.warning = 'error!'
            })
    }
});

export const {changeName} = genderSlice.actions
export default genderSlice.reducer