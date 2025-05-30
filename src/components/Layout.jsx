import { Outlet } from "react-router";
import { Header } from "./Header";

export function Layout() {
return (
    <>
        <Header />
        <div className="max-w-3xl mx-auto w-full px-4">
            <Outlet />
        </div>
    </>
);
}