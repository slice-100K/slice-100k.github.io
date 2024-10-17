import SearchBar from '@/components/SearchBar';
import PageWrapper from '@/components/layout/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="space-y-4 pt-10">
        <div className="w-100 flex items-center justify-center">
          <img className="w-96" src="/logo.png" alt="" />
        </div>
        <h1 className="pb-4 text-center text-5xl">
          Slice-100K Explorer
        </h1>
        <SearchBar />
      </div>
    </PageWrapper>
  );
}

export default Home;
