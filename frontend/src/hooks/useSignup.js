    // useSignup.js
    import { useState } from "react";
    import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


    const useSignup = () => {
        const [loading, setLoading] = useState(false);
        const { setAuthUser } = useAuthContext();


        const signup =  async({ fullName, userName, password, confirmPassword,email, gender }) => {
            const success = handleInputErrors({ fullName, userName, password, email,confirmPassword, gender });
            if (!success) {
                // Return early if there are input errors
                return;
            }

            setLoading(true);
            try {
                const res =  await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullName, userName, password, confirmPassword, email,gender }),
                });

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
               
                toast.success("Sign up successful!");
                console.log(data);
                
                localStorage.setItem('chat-user',JSON.stringify(data))
                setAuthUser(data)

            } catch (error) {
                console.error(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        return { loading, signup };
    };

    function handleInputErrors({ fullName, userName, password, confirmPassword,email, gender }) {
        if (!fullName || !userName || !password || !confirmPassword ||!email || !gender) {
            toast.error("Please fill in all fields");
            return false;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const isValidEmail = emailRegex.test(email);

          if(!isValidEmail){
            toast.error("Enter Valid Email")
              return false; 
          }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return false;
        }

        return true;
    }

    export default useSignup;
