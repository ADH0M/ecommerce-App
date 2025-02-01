import Asidebar from "../../Components/layout/AsiderBar/Asidebar";
import Sections from "./Sections";

const MenSection = () => {
  
  return (
    <div className="h-screen pt-3 min-h-fit">
      <div className=" w-full h-fit flex ">
        <aside className="w-[24%] h-full border-r px-2 py-3">
          <Asidebar/>
        </aside>

        <section className="w-full h-full flex-1 ">
          <Sections/>
        </section>
      </div>
    </div>
  );
};

export default MenSection;
