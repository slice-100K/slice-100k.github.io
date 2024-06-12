import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Props {
  urls: string[];
}

function ImageCarousel({ urls }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        {urls.map((url) => {
          return (
            <CarouselItem>
              <img src={ url } alt="" />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImageCarousel;
