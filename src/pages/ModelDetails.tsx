import ImageCarousel from '@/components/ImageCarousel';
import PageWrapper from '@/components/layout/PageWrapper';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '@/assets/models.json';
import { ModelData } from '@/components/Forms';

function ModelDetails() {
  const { modelId } = useParams<'modelId'>();
  const [modelData, setModelData] = useState<ModelData>();

  useEffect(() => {
    let model = data.find((item) => item.name == modelId) || null;
    if (model) {
      setModelData({
        ...model,
        images_urls: [
          '/media/' + model.name + '/iso_000.png',
          '/media/' + model.name + '/ortho_000.png',
          '/media/' + model.name + '/ortho_002.png',
          '/media/' + model.name + '/ortho_005.png',
        ],
      });
    }
  }, []);

  return (
    <PageWrapper title={modelId}>
      {modelData ? (
        <>
          <div className="flex items-center justify-center">
            <div className="w-1/3">
              <ImageCarousel urls={modelData.images_urls || []} />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Tags</h2>
            <div className="w-100 space-x-2 space-y-2">
              <Badge variant="secondary">
                {'Edge count: ' + modelData.edge_count}
              </Badge>
              <Badge variant="secondary">
                {'Poly count: ' + modelData.poly_count}
              </Badge>
              <Badge variant="secondary">
                {'Vert count: ' + modelData.vert_count}
              </Badge>
              {modelData.top_3_categories.map((tag) => {
                return <Badge key={tag}>{tag}</Badge>;
              })}
            </div>
          </div>
        </>
      ) : (
        <p>Model not found</p>
      )}
    </PageWrapper>
  );
}

export default ModelDetails;
