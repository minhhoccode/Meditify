import "./sideBar.scss";
import Cards from "./cards";

export default function SideBar() {
  return (
    <>
      <div className="SideBar">
        <div className="sidebarItem">
          <p className="TopHead">What we are reading today</p>
          <Cards
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="The Future of Work"
            url="The Future of Work"
            author={{ name: "John Doe" }}
          />

          {/* another card */}
          <Cards
            title="in the sky"
            url="in the sky"
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            author={{ name: "John Doe" }}
          />
        </div>
      </div>
    </>
  );
}
