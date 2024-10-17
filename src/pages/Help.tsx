import PageWrapper from '@/components/layout/PageWrapper';

function About() {
  return (
    <PageWrapper>
      <div className="container max-w-screen-lg space-y-4 px-0 py-4 md:px-4">
        <h1>User Manual for 3D Model Search</h1>
        <div>
          <h2>Query Field</h2>
          <ul className="list-disc ps-8">
            <li>Enter keywords separated by spaces.</li>
            <li>
              Use the Query Field to search for <code>filename</code> or{' '}
              <code>category</code>.
            </li>
          </ul>
        </div>
        <div>
          <h2>Integer Min/Max Fields</h2>

          <ul className="list-disc ps-8">
            <li>
              Enter the <strong>minimum</strong> / <strong>maximum</strong>{' '}
              values for numeric fields.
            </li>
            <li>
              Use the Min/Max Fields to filter based on <code>edge_count</code>,{' '}
              <code>poly_count</code>, and <code>vert_count</code>.
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

export default About;
