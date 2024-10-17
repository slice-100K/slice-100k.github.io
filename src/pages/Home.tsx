import SearchBar from '@/components/SearchBar';
import PageWrapper from '@/components/layout/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="space-y-4 pt-10">
        <div className="w-100 flex items-center justify-center">
          <img className="h-64 md:h-80" src="/logo.png" alt="" />
        </div>
        <h1 className="pb-4 pt-4 text-center text-5xl md:pt-8">
          Slice-100K Explorer
        </h1>
        <SearchBar />
        <div className="w-full space-x-12 py-4 text-center text-xl">
          <a className="underline" href="https://arxiv.org/abs/2407.04180">
            Paper
          </a>
          <a
            className="underline"
            href="https://github.com/slice-100K/slice-100k.github.io"
          >
            Github
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
