import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  addData: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
  removeData: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((item) => item.id !== id),
    })),
}));
export default usePhoneBookStore;
