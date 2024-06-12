import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

interface Props {
  children: ReactNode;
  title?: string;
}

function PageWrapper({ children, title }: Props) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 flex-col">
        <div className="mt-16 flex-1 px-10 py-4">
          {title && <h1 className="text-3xl font-semibold">{title}</h1>}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageWrapper;
