import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// 型定義をexport（公式推奨パターン）
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
