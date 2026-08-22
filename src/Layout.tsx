import ReactNode from "react";
import Navigation from "./components/Navigation"; // Adjust path as needed

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full px-3 py-3 md:w-[40%] md:px-0 md:py-5 max-w-225 mx-auto font-mono">
      <Navigation />

      <main className="mt-3 md:mt-7">
        {children}
      </main>
    </div>
  );
};

export default Layout;
