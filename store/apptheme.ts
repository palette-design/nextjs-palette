import { create } from 'zustand'
import defaultTheme from '../theme'
import theme2 from '../theme2'
import theme3 from '../theme3'

interface State {
    selectedTheme: any,
    setSelectedTheme: (theme: any) => void
}

export const useAppThemeStore = create<State>((set) => ({
    selectedTheme: defaultTheme,
    setSelectedTheme: (key) => {
        set((state) => {
            let theme = defaultTheme

            switch (key) {
                case defaultTheme.key:
                    theme = defaultTheme
                    break
                case theme2.key:
                    theme = theme2
                    break
                case theme3.key:
                    theme = theme3
                    break
                default:
                    theme = state.selectedTheme
                    break
            }

            return { selectedTheme: theme }
        })        
    }
}))