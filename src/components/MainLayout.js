import React from "react";
import CompleteTodoList from "./CompleteTodoList";
import Footer from "./Footer";
import FooterTop from "./FooterTop";
import Header from "./Header";
import Navbar from "./Navbar";
// import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  //   const todos = useSelector((state) => state.todos);
  //   const values = todos.map((todo) => todo.completed);
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr className="mt-4" />
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
          {children}
        </div>
        <FooterTop />
        <hr className="mt-4" />
        {/* <div class="w-16 h-1 align-center rounded-full bg-indigo-500 inline-flex"></div> */}
        <hr className="mt-4" />
        <CompleteTodoList />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
