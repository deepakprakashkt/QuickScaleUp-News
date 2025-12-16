// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import World from "./Pages/World";
// import Politics from "./Pages/Politics";
// import Business from "./Pages/Business";
// import Health from "./Pages/Health";
// import Technology from "./Pages/Technology";

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/world" element={<World />} />
//         <Route path="/politics" element={<Politics />} />
//         <Route path="/business" element={<Business />} />
//         <Route path="/health" element={<Health />} />
//         <Route path="/technology" element={<Technology />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;




// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import CategorySection from "./Components/CategorySection";
// import Footer from "./Components/Footer";
// import NewsDetails from "./Pages/NewsDetails";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <CategorySection title="Health" />
//               <CategorySection title="Business" />
//               <CategorySection title="Technology" />
//             </>
//           }
//         />

//         <Route path="/news/:id" element={<NewsDetails />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;








// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import CategorySection from "./Components/CategorySection";
// import Footer from "./Components/Footer";
// import NewsDetails from "./Pages/NewsDetails";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <div id="health">
//                 <CategorySection title="Health" />
//               </div>

//               <div id="business">
//                 <CategorySection title="Business" />
//               </div>

//               <div id="technology">
//                 <CategorySection title="Technology" />
//               </div>
//             </>
//           }
//         />

//         <Route path="/news/:id" element={<NewsDetails />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;





// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import CategorySection from "./Components/CategorySection";
// import Footer from "./Components/Footer";

// import NewsDetails from "./Pages/NewsDetails";
// import Politics from "./Pages/Politics";
// import Arts from "./Pages/Arts";
// import Science from "./Pages/Science";

// function App() {
//   return (
//     <>
//       {/* Navbar always visible */}
//       <Navbar />

//       <Routes>
//         {/* ================= HOME ================= */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <CategorySection title="Health" />
//               <CategorySection title="Business" />
//               <CategorySection title="Technology" />
//             </>
//           }
//         />

//         {/* ================= CATEGORY PAGES ================= */}
//         <Route path="/health" element={<CategorySection title="Health" />} />
//         <Route path="/business" element={<CategorySection title="Business" />} />
//         <Route path="/technology" element={<CategorySection title="Technology" />} />

//         {/* ================= STATIC NAVBAR PAGES ================= */}
//         <Route path="/polytics" element={<Politics />} />
//         <Route path="/arts" element={<Arts />} />
//         <Route path="/science" element={<Science />} />

//         {/* ================= NEWS DETAILS ================= */}
//         <Route path="/news/:id" element={<NewsDetails />} />

//         {/* ================= 404 FALLBACK ================= */}
//         <Route
//           path="*"
//           element={
//             <div className="text-center py-20">
//               <h1 className="text-3xl font-bold">404</h1>
//               <p className="mt-2 text-gray-500">Page not found</p>
//             </div>
//           }
//         />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//     </>
//   );
// }

// export default App;








// nice thoughts 

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import Business from "./Pages/Business";
// import Health from "./Pages/Health";
// import Technology from "./Pages/Technology";
// import World from "./Pages/World";
// import Politics from "./Pages/Politics";
// import Arts from "./Pages/Arts";
// import Science from "./Pages/Science";
// import NewsDetails from "./Pages/NewsDetails";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/business" element={<Business />} />
//         <Route path="/health" element={<Health />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/world" element={<World />} />
//         <Route path="/politics" element={<Politics />} />
//         <Route path="/arts" element={<Arts />} />
//         <Route path="/science" element={<Science />} />
//         <Route path="/news/:category/:id" element={<NewsDetails />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;







// src/App.jsx


// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import Business from "./Pages/Business";
// import Health from "./Pages/Health";
// import Technology from "./Pages/Technology";
// import World from "./Pages/World";
// import Politics from "./Pages/Politics";
// import Arts from "./Pages/Arts";
// import Science from "./Pages/Science";
// import NewsDetails from "./Pages/NewsDetails";




// import BreakingDetails from "./Pages/BreakingDetails";

 
// import Auth from "./Pages/Auth";






// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/business" element={<Business />} />
//         <Route path="/health" element={<Health />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/world" element={<World />} />
//         <Route path="/politics" element={<Politics />} />
//         <Route path="/arts" element={<Arts />} />
//         <Route path="/science" element={<Science />} />
//         <Route path="/news/:category/:id" element={<NewsDetails />} />


//         <Route path="/breaking" element={<BreakingDetails />} />


//         <Route path="/auth" element={<Auth />} />
//       </Routes>

//       <Footer />

//       {/* Toast */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// }

// export default App;






 



 // after update 

 import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Health from "./Pages/Health";
import Technology from "./Pages/Technology";
import World from "./Pages/World";
import Politics from "./Pages/Politics";
import Arts from "./Pages/Arts";
import Science from "./Pages/Science";
import NewsDetails from "./Pages/NewsDetails";
import BreakingDetails from "./Pages/BreakingDetails";
import Auth from "./Pages/Auth";

/* ✅ AUTH PROVIDER */
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/world" element={<World />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/science" element={<Science />} />
        <Route path="/news/:category/:id" element={<NewsDetails />} />
        <Route path="/breaking" element={<BreakingDetails />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  );
}

export default App;
