import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ReactNode } from 'react';

interface Props {
  extraMenuItem?: ReactNode;
}

function Navbar({ extraMenuItem }: Props) {
  return (
    <NavigationMenu className="fixed flex h-16 w-screen flex-none justify-start bg-slate-800 px-8 py-4">
      <NavigationMenuList className="space-x-4">
        {extraMenuItem && (
          <NavigationMenuItem>{extraMenuItem}</NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <a className="hover:underline" href="/">
            Home
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a className="hover:underline" href="/about/">
            About
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a className="hover:underline" href="/models/">
            Browse
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a className="hover:underline" href="/help/">
            Help
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
