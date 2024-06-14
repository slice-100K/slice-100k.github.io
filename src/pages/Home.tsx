import SearchBar from '@/components/SearchBar';
import PageWrapper from '@/components/layout/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="space-y-4 pt-60">
        <h1 className="text-center text-5xl text-slate-300">SLICE-100K Explorer</h1>
        <SearchBar />
      </div>
    </PageWrapper>
  );
}

export default Home;
