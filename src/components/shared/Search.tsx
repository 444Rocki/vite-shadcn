import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function Search({ onChange }: { onChange: (value: string) => void }) {
  return (
    <Field>
      <FieldLabel htmlFor='input-demo-api-key'>Search</FieldLabel>
      <Input
        id='input-demo-api-key'
        type='text'
        placeholder='Search...'
        onChange={(e) => onChange(e.target.value)}
      />
      <FieldDescription>
        Search for products, categories, or tags
      </FieldDescription>
    </Field>
  );
}