import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  title: string;
  url: string;
}

function ModelCard({ title, url }: Props) {
  return (
    <a href={"/#/models/" + title}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <img src={url} alt={title + ' image'} />
        </CardContent>
      </Card>
    </a>
  );
}

export default ModelCard;
