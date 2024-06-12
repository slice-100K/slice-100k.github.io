import PageWrapper from '@/components/layout/PageWrapper';

function About() {
  return (
    <PageWrapper>
      <h1 className='text-orange-400'>User Manual for 3D Model Search</h1>
      <div className="space-y-10 py-4">
        <div>
          <h2 className='text-orange-300'>Query Field</h2>
          <ul className="list-disc ps-8">
            <li>Enter keywords separated by spaces.</li>
            <li>
              Use the comparison operators (<code>&lt;</code>, <code>&gt;</code>
              , <code>=</code>) to leverage advanced search capabilities of
              integer properties (<code>triangles</code>, <code>vertices</code>
              ), e.g.,
              <ul className="list-disc space-y-2 py-2 ps-8">
                <li>
                  <code>vertices&gt;100</code>
                </li>
                <li>
                  <code>100&gt;vertices</code>
                </li>
                <li>
                  <code>100&lt;triangles&lt;300</code>
                </li>
                <li>
                  <code>triangles=300</code>
                </li>
              </ul>
            </li>
            <li>
              Use the boolean variables (<code>edge_manifold</code>,{' '}
              <code>edge_manifold_boundary</code>,<code>orientable</code>,{' '}
              <code>self_intersecting</code>, <code>vertex_manifold</code>,
              <code>watertight</code>) to further filter the results. Add
              <code>_not</code>
              in front if you want models without that attribute, e.g.,
              <ul className="list-disc space-y-2 py-2 ps-8">
                <li>
                  <code>edge_manifold</code>
                </li>
                <li>
                  <code>not_edge_manifold</code>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-orange-300'>Integer Min/Max Fields</h2>

          <ul className="list-disc ps-8">
            <li>
              Min Vertices: Enter the minimum number of vertices the models
              should have.
            </li>
            <li>
              Max Vertices: Enter the maximum number of vertices the models
              should have.
            </li>
            <li>
              Min Triangles: Enter the minimum number of triangles the models
              should have.
            </li>
            <li>
              Max Triangles: Enter the maximum number of triangles the models
              should have.
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-orange-300'>Boolean Fields</h2>
          <ul className="list-disc ps-8">
            <li>
              True: Set the toggle to True to search for models where the
              attribute is true.
            </li>
            <li>
              False: Set the toggle to False to search for models where the
              attribute is false.
            </li>
            <li>
              Any: Select Any if you do not want this attribute to influence the
              search.
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-orange-400'>Example Queries</h1>
          <ul className="list-disc ps-8">
            <li>
              Simple Text Search: Enter "house" to find all models with the word
              "house" in their name or tags.
            </li>
            <li>
              Complex Query: Enter <code>vertices&gt;500 not_watertight</code>{' '}
              with Edge Manifold set to True to find models that have more than
              500 vertices, are not watertight, and have an edge manifold
              property set to true.
            </li>
            <li>
              Numerical Ranges: Input Min Vertices: 100 and Max Vertices: 500 to
              search for models with vertices ranging from 100 to 500.
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

export default About;
