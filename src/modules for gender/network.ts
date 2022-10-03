import {createAsyncThunk} from "@reduxjs/toolkit";

const nameUrl = 'https://api.genderize.io';
const counryUrl = 'https://api.nationalize.io';

export const searchGender = createAsyncThunk(
    'gender/searchGender',
    async function (name: string) {
        const url = `${nameUrl}?name=${name}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.gender == null) return ''

        return data.gender;
    }
)

export const searchCountry = createAsyncThunk(
    'gender/searchCountry',
    async function (name: string) {
        const url = `${counryUrl}?name=${name}`;

        const response = await fetch(url);
        const result = await response.json();

        if (result.country.length === 0) return 'Введи корректное имя'

        return result.country[0].country_id;
    }
)