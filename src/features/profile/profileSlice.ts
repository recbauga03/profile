import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProfileState {
    isDrawerOpen: boolean;
    theme: string;
}

const initialState: ProfileState = {
    isDrawerOpen: false,
    theme: 'light',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
            state.isDrawerOpen = action.payload;
        },
        
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light';
        },

    }
})


export const { setIsDrawerOpen, toggleTheme } = profileSlice.actions;
export const selectIsDrawerOpen = (state: RootState) => state.profile.isDrawerOpen;
export const selectTheme = (state: RootState) => state.profile.theme;

export default profileSlice.reducer;