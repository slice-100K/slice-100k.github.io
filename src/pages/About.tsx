import PageWrapper from '@/components/layout/PageWrapper';

function About() {
  return (
    <PageWrapper>
      <div className="container max-w-screen-lg space-y-4 px-0 py-4 md:px-4">
        <h1>About</h1>
        <p>
          G-code (Geometric code) or RS-274 is the most widely used computer
          numerical control (CNC) and 3D printing programming language. G-code
          provides machine instructions for the movement of the 3D printer,
          especially for the nozzle, stage, and extrusion of material for
          extrusion-based additive manufacturing.
        </p>
        <p>
          Currently there does not exist a large repository of curated CAD
          models along with their corresponding G-code files for additive
          manufacturing. To address this issue, we present Slice-100k, a
          first-of-its-kind dataset of over 100,000 G-code files, along with
          their tessellated CAD model, LVIS (Large Vocabulary Instance
          Segmentation) categories, geometric properties, and renderings.
        </p>
        <p>
          We build our dataset from triangulated meshes derived from
          Objaverse-XL and Thingi10K datasets. We demonstrate the utility of
          this dataset by finetuning GPT-2 on a subset of the dataset for G-code
          translation from a legacy G-code format (Sailfish) to a more modern,
          widely used format (Marlin). Our dataset can be downloaded{' '}
          <a
            className="underline"
            href="https://anonymous.4open.science/r/SLICE-100K-A31A/README.md"
          >
            here
          </a>
          . Slice-100k will be the first step in developing a multimodal
          foundation model for digital manufacturing.
        </p>
      </div>
    </PageWrapper>
  );
}

export default About;
