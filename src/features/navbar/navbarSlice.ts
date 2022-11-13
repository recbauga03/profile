import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Config {
}

const initialState: Config = {
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {

    }
})

export default navbarSlice.reducer;