import Menu from "@/app/menu/Menu";
import MenuMobile from "./MenuMobile";
import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <section className="bg-menubg flex w-full flex-col items-center justify-start bg-menubackground">
      <div className="hidden w-full justify-center md:flex">
        <Navbar position="static" />
      </div>
      <div className="hidden w-full items-center justify-center bg-[url('/images/home/hero/bg.png')] bg-cover bg-center bg-no-repeat md:flex">
        <Menu />
      </div>
      <div className="flex w-full items-center justify-center bg-[url('/images/home/hero/bg.png')] bg-cover bg-center md:hidden">
        <MenuMobile />
      </div>
    </section>
  );
}
