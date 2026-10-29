import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { getCookie } from "@/services/storage";
import { getUser, searchProducts } from "@/services/api/query";
import { useDebounce } from "use-debounce";
import type { ProductsProp } from "@/types";
import { Search } from "@/components/shared/Search";
import { Thumbnail } from "@/components/shared/Thumbnail";

export const Dashboard = () => {
  const user = JSON.parse(getCookie("userData") || "{}");
  const [data, setData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ProductsProp[]>([]);
  const [value] = useDebounce(searchQuery, 1000);

  useEffect(() => {
    getUser()
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (value) {
      searchProducts(value)
        .then((response) => {
          console.log(response.data);
          if (response.data.products.length > 0) {
            setSearchResults(response.data.products);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [value]);
  return (
    <>
      {value && <p>Search query: {value}</p>}
        <Search onChange={(value) => setSearchQuery(value)} />
        {searchResults.length > 0 && (
          <div className='grid grid-cols-2 gap-4'>
            {searchResults.map((product: ProductsProp) => (
              <div key={product.id}>
                <Thumbnail
                  title={product.title}
                  image={product.images[0]}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        )}
        <Card className='relative mx-auto w-full max-w-sm pt-0'>
          <div className='absolute inset-0 z-30 aspect-video bg-black/35' />
          <img
            src={user.image || "https://avatar.vercel.sh/shadcn1"}
            alt='Event cover'
            className='relative z-20 aspect-video w-full object-cover brightness-60 grayscale'
          />
          <CardHeader>
            <CardAction>
              <Badge variant='secondary'>Featured</Badge>
            </CardAction>
            <CardTitle>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/10.x/initials/svg?seed=${user.firstName} ${user.lastName}`}
                  />
                  <AvatarFallback>
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className='flex items-center gap-2'>
                  <span>{user.firstName}</span>
                  <span>{user.lastName}</span>
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              {data?.hair?.color}
              {console.log(data)}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className='w-full'>View Event</Button>
          </CardFooter>
        </Card>
    </>
  );
};