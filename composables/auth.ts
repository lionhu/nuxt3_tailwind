import { useState } from "#app";

export const useAuthState = () => {
    const user = useState("user", () => {});
    const formSubmitted = (values ) => {
        console.log("FormSubmitted composables:",values);
        
        user.value = values;
    }
    const updateFormValues = (values) => {
        console.log("updateFormValues composables:", values);
        user.value = values;
        
    }
    return {
      user,
        formSubmitted,
      updateFormValues
    };
}