import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Config {
}

const initialState: Config = {

};

export const coverSlice = createSlice({
    name: 'cover',
    initialState,
    reducers: {

    }
})

export default coverSlice.reducer;