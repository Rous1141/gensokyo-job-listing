import {create} from 'zustand';
import { AccountProps } from '../api/Account/IAccount';

interface AuthsState {
    current_account: AccountProps | null;
    isAuthenticated: boolean;
    setAccount: (account: AccountProps) => void;
    removeAccount: () => void;
}

const useAuths = create<AuthsState>((set)=> ({
    current_account: null,
    isAuthenticated:false,
    setAccount: (account: AccountProps) => set({ current_account: account,isAuthenticated:true }),
    removeAccount: () => set({ current_account: null,isAuthenticated:false }),
}))
    //demo
const useStore = create()((set) => ({
    count: 1,
    inc: () => set((state:any) => ({ count: state.count + 1 })),
  }))

export default useAuths;