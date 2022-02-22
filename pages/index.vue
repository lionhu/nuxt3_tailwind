<style scoped>
</style>
<template>
<div>
    <div class="p-4 bg-black lg:p-10 root">
        <div>
            <WidgetsFlipCard></WidgetsFlipCard>

            <h1 class="inset-2 bg-wavus">hello wavus</h1>
            <h1 class="inset-2 bg-wavus-header">hello header</h1>
            <h2 class="inset-2 bg-wavus-sub">hello sub</h2>
            <h2 class="inset-2 bg-wavus-muted bg-opacity-70">Muted opacity</h2>
        </div>

        <div class="wavus">
            <h1 class="inset-2 bg-wavus">inside socpe variables</h1>
        </div>

        <div class="p-6 mx-auto">
            <div class="flex justify-center space-x-10">
                <div class="relative max-w-full overflow-hidden rounded-lg shadow-2xl bg-gradient-to-tr from-blue-500 to-green-400 w-80 h-80">
                    <img class="absolute inset-0 object-cover w-full h-full mix-blend-overlay" src="https://images.unsplash.com/photo-1552318317-ee6689754024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
                <div class="relative max-w-full overflow-hidden rounded-lg shadow-2xl bg-gradient-to-tr from-yellow-500 to-red-400 w-80 h-80">
                    <img class="absolute inset-0 object-cover w-full h-full mix-blend-overlay" src="https://images.unsplash.com/photo-1552318317-ee6689754024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
                <div class="relative max-w-full overflow-hidden rounded-lg shadow-2xl bg-gradient-to-tr from-red-500 to-purple-400 w-80 h-80">
                    <img class="absolute inset-0 object-cover w-full h-full mix-blend-overlay" src="https://images.unsplash.com/photo-1552318317-ee6689754024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
            </div>
        </div>
        <div class="relative w-full max-w-4xl bg-blue-500 bg-center bg-cover h-96 rounded-xl bg-texture bg-blend-color-burn">
            <h1 class="max-w-3xl p-8 font-black text-white uppercase transform text-8xl -rotate-6 mix-blend-overlay filter blur-px">
                CSS blend modes are super cool!
            </h1>
        </div>
    </div>
</div>
</template>

<style scoped>
h1::after {
  content: attr(data-counter);
  position: absolute;
  right: 0;
  top: -2.25rem;
  padding: 0.3rem;
  width: 30px;
  height: 30px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  font-size: 16px;
}
</style>

<script>
// import {
//     reactive,
//     ref
// } from "vue";
// import {
//     CheckboxField,
//     TextField,
//     SelectField,
// } from "@asigloo/vue-dynamic-forms";

// import {
//     useUserStore
// } from "@/stores/user";
// import {
//     useCounterStore
// } from "@/stores/counter";

// const user = useUserStore();
// const counter = useCounterStore(); // Same as useState('color')
// const authUser = useAuthState();

// const form = reactive({
//     id: "basic-demo",
//     fields: {
//         username: TextField({
//             label: "Username",
//         }),
//         games: SelectField({
//             label: "Games",
//             options: [{
//                     value: "the-last-of-us",
//                     label: "The Last of Us II",
//                 },
//                 {
//                     value: "death-stranding",
//                     label: "Death Stranding",
//                 },
//                 {
//                     value: "nier-automata",
//                     label: "Nier Automata",
//                 },
//             ],
//         }),
//         checkIfAwesome: CheckboxField({
//             label: "Remember Me",
//         }),
//     },
// });
</script>
