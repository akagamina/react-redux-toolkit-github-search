import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import repositoryReducer from '../../features/repositories/repositorySlice'
export const store = configureStore({
    reducer: {
        repoList: repositoryReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;