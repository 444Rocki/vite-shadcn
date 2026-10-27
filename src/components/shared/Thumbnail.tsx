import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const Thumbnail = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className='relative mx-auto w-full max-w-sm pt-0'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};