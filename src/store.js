import create from 'zustand'
import { devtools } from 'zustand/middleware'


const useProductsStore = create(devtools((set) => ({
  products: [],
  fetch: async (url) => {
    const res = await fetch(url)
    set({products: await res.json()})
  }
})))

export default useProductsStore