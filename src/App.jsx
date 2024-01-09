import React from "react";
// Assuming that `nav` is a named export from "./component"
import { Navbar, Header, Main } from "./component";

const App = () => {
  return (
    <div className="max-w-[2000px] mx-auto text-neutral-900 dark:text-neutral-200 dark:bg-neutral-900 bg-neutral-200">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
