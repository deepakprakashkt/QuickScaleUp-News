// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Auth() {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email.includes("@")) {
//       toast.error("Invalid email");
//       return;
//     }

//     if (form.password.length < 6) {
//       toast.error("Password must be 6 characters");
//       return;
//     }

//     if (!isLogin && form.name.trim().length < 2) {
//       toast.error("Enter valid name");
//       return;
//     }

//     // SAVE USER
//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         name: isLogin ? "User" : form.name,
//         email: form.email
//       })
//     );

//     toast.success(isLogin ? "Login successful" : "Signup successful");
//     navigate("/");
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl w-full max-w-md shadow">
//         <h1 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               name="name"
//               placeholder="Full Name"
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//           )}

//           <input
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//           />

//           <button className="w-full bg-black text-white py-2 rounded">
//             {isLogin ? "Login" : "Create Account"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "No account?" : "Already registered?"}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-red-600 ml-2"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Auth;



// after update 


// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// function Auth() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (location.state?.mode === "signup") {
//       setIsLogin(false);
//       setForm((prev) => ({
//         ...prev,
//         email: location.state.email || "",
//       }));
//     }
//   }, [location.state]);

//   const validateEmail = (email) =>
//     /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

//   const validatePassword = (password) =>
//     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(form.email)) {
//       toast.error("Only valid Gmail allowed");
//       return;
//     }

//     if (!validatePassword(form.password)) {
//       toast.error(
//         "Password must be 6+ characters with letters & numbers"
//       );
//       return;
//     }

//     if (!isLogin && form.name.trim().length < 2) {
//       toast.error("Enter valid name");
//       return;
//     }

//     const userData = {
//       name: isLogin ? "User" : form.name,
//       email: form.email,
//     };

//     login(userData);

//     toast.success(isLogin ? "Login successful" : "Signup successful");

//     navigate("/");
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl w-full max-w-md shadow">
//         <h1 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               name="name"
//               placeholder="Full Name"
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//           )}

//           <input
//             name="email"
//             placeholder="Gmail"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//           />

//           <button className="w-full bg-black text-white py-2 rounded">
//             {isLogin ? "Login" : "Create Account"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "No account?" : "Already registered?"}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-red-600 ml-2"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Auth;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Invalid email");
    if (password.length < 6) return alert("Password min 6 chars");

    if (isLogin) {
      const ok = login(email, password);
      if (ok) navigate("/");
    } else {
      const ok = signup(name, email, password);
      if (ok) setIsLogin(true); // 🔥 IMPORTANT FIX
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className="border w-full p-2 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-black text-white w-full py-2 rounded">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p
          className="text-sm text-center mt-4 cursor-pointer text-red-600"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </form>
    </section>
  );
}

export default Auth;
