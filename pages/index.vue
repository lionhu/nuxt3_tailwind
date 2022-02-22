<style scoped>

</style>
<template>
<div>

    <div class="p-4 lg:p-10 root">
        <div>
            <WidgetsFlipCard></WidgetsFlipCard>

      <h1 class="inset-2 bg-wavus">hello wavus</h1>
      <h1 class="inset-2 bg-wavus-header">hello header</h1>
      <h2 class="inset-2 bg-wavus-sub">hello sub</h2>
        </div>

        <div class="wavus">
            
      <h1 class="inset-2 bg-wavus">inside socpe variables</h1>
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
export default {
    layout: "mobile",
};
</script>
<script setup>
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
