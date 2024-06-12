import { FormLabel, FormItem, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { FormData, formDataKeys } from './Forms';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Props {
  onSubmit: (formData: FormData) => void;
}

function SearchForm({ onSubmit }: Props) {
  const form = useForm<FormData>({});
  const [searchParams] = useSearchParams();

  const initializeFormWithSearchParams = () => {
    formDataKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        form.setValue(key, value);
      }
    });
  };

  useEffect(() => {
    initializeFormWithSearchParams();
    // This will reinitialize the form whenever searchParams change
  }, [searchParams]);

  const handleSubmit = (data: FormData) => {
    data = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != ''));
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        className="w-64 px-6 pb-12"
        onChange={form.handleSubmit(handleSubmit)}
        autoComplete="off"
      >
        <FormItem>
          <FormLabel className="col-span-2 text-slate-200" htmlFor="q">
            Query:
          </FormLabel>
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            {...form.register('q')}
            placeholder="Search models..."
          />
        </FormItem>

        <FormItem className="grid grid-cols-2 gap-x-2 pt-2">
          <FormLabel
            className="col-span-2 text-slate-200"
            htmlFor="edge_count"
          >
            Edge Count:
          </FormLabel>
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('min_edge_count')}
            placeholder="Min"
          />
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('max_edge_count')}
            placeholder="Max"
          />
        </FormItem>

        <FormItem className="grid grid-cols-2 gap-x-2 pt-2">
          <FormLabel
            className="col-span-2 text-slate-200"
            htmlFor="poly_count"
          >
            Poly Count:
          </FormLabel>
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('min_poly_count')}
            placeholder="Min"
          />
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('max_poly_count')}
            placeholder="Max"
          />
        </FormItem>

        <FormItem className="grid grid-cols-2 gap-x-2 pt-2">
          <FormLabel
            className="col-span-2 text-slate-200"
            htmlFor="vert_count"
          >
            Vert count:
          </FormLabel>
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('min_vert_count')}
            placeholder="Min"
          />
          <Input
            className="border-slate-200 bg-slate-800 text-slate-200"
            type="number"
            min="0"
            step="1"
            {...form.register('max_vert_count')}
            placeholder="Max"
          />
        </FormItem>
      </form>
    </Form>
  );
}

export default SearchForm;
