import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export function Header({ title, description }: { title: string; description: string }) {
  return (
    <div className='flex w-full flex-col gap-6'>
      <Item variant='outline'>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description}
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}