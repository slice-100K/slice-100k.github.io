import ModelCard from '@/components/ModelCard';
import SearchForm from '@/components/SearchForm';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FormData, ModelData, formDataKeys } from '@/components/Forms';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Navbar from '@/components/layout/Navbar';
import SearchIcon from '@/assets/search.svg?react';
import { Button } from '@/components/ui/button';
import CustomPagination from '@/components/CustomPagination';
import data from '@/assets/models.json';

type Model = {
  name: string;
  image_url: string;
};

function Models() {
  const [searchParams] = useSearchParams();
  const initialParams: FormData = formDataKeys.reduce((acc, key) => {
    const value = searchParams.get(key);
    if (value !== null && value !== '') {
      acc[key] = value;
    }
    return acc;
  }, {} as FormData);
  const [models, setModels] = useState<Model[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = models.slice(firstItemIndex, lastItemIndex);

  const navigate = useNavigate();

  const normalizeString = (input: String): String => {
    return input.replace(/[^\w\s]+/g, '').toLowerCase();
  };

  const queryMatches = (item: ModelData, q: String): boolean => {
    // Normalize the query and split into words
    const queryWords = normalizeString(q).split(/\s+/);

    // Normalize the item's name and categories for comparison
    const normalizedItemName = normalizeString(item.name);
    const normalizedCategories = item.top_3_categories.map((cat) =>
      normalizeString(cat)
    );

    // Check if all query words are found in item's name or any top category
    return queryWords.every(
      (word) =>
        normalizedItemName.includes(word) ||
        normalizedCategories.some((category) => category.includes(word))
    );
  };

  const filterResults = (formData: FormData) => {
    let filteredData = data.filter((item) => {
      if (formData.q && !queryMatches(item, formData.q)) {
        return false;
      }

      if (
        formData.min_edge_count &&
        item.edge_count < parseInt(formData.min_edge_count)
      ) {
        return false;
      }
      if (
        formData.max_edge_count &&
        item.edge_count > parseInt(formData.max_edge_count)
      ) {
        return false;
      }

      if (
        formData.min_poly_count &&
        item.poly_count < parseInt(formData.min_poly_count)
      ) {
        return false;
      }
      if (
        formData.max_poly_count &&
        item.poly_count > parseInt(formData.max_poly_count)
      ) {
        return false;
      }

      if (
        formData.min_vert_count &&
        item.vert_count < parseInt(formData.min_vert_count)
      ) {
        return false;
      }
      if (
        formData.max_vert_count &&
        item.vert_count > parseInt(formData.max_vert_count)
      ) {
        return false;
      }

      return true;
    });
    setModels(
      filteredData.map((item) => ({
        name: item.name,
        image_url: '/media/' + item.name + '/ortho_000.png',
      }))
    );
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/models/?${queryString}`);
  };

  useEffect(() => {
    filterResults(initialParams);
  }, []);

  return (
    <>
      <Navbar
        extraMenuItem={
          <Sheet>
            <SheetTrigger className="block p-0 md:hidden">
              <Button className="h-8 ">
                <SearchIcon className="h-full w-full" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 overflow-scroll bg-slate-800 px-0 pt-10"
            >
              <SearchForm onSubmit={filterResults} />
            </SheetContent>
          </Sheet>
        }
      />
      <div className="flex">
        <div className="fixed mt-16 hidden h-[calc(100vh-4rem)] flex-none overflow-y-scroll bg-slate-800 md:block">
          <SearchForm onSubmit={filterResults} />
        </div>
        <div className="mt-16 p-4 md:ms-64 md:px-8">
          <CustomPagination
            totalItems={models.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></CustomPagination>
          <div className="py-4">
            {models.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 p-0 sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {currentItems.map((model) => {
                  return (
                    <ModelCard
                      key={model.name}
                      title={model.name}
                      url={model.image_url}
                    />
                  );
                })}
              </div>
            ) : (
              <div>No results</div>
            )}
          </div>
          <CustomPagination
            totalItems={models.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></CustomPagination>
        </div>
      </div>
    </>
  );
}

export default Models;
