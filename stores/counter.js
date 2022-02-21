// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'



export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),

  actions: {

    update_counter(value){
      this.$patch({
        count: value,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
