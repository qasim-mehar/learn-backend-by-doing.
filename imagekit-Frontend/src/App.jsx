import CreatePosts from "./pages/CreatePosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create-post" element={<CreatePosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
