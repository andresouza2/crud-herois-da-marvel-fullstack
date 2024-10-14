import { create } from 'zustand'

type State = {
	isOpen: boolean
	toggleOpen: () => void
	handleDrawerOpen: () => void
	handleDrawerClose: () => void
}

export const useMenuStore = create<State>((set) => ({
	isOpen: false,
	toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
	handleDrawerOpen: () => set({ isOpen: true }),
	handleDrawerClose: () => set({ isOpen: false })
}))
