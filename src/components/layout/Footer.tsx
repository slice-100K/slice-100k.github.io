import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

function Footer() {
  return (
    <>
      <NavigationMenu className="flex w-screen justify-center bg-slate-800 px-8 py-4 text-slate-300">
        <NavigationMenuList className="space-x-4">
          &copy; 2024
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Footer;
