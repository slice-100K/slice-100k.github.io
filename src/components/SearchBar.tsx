import { Input } from '@/components/ui/input';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  q?: string;
  onSubmit?: (query: string) => void;
}

function SearchBar({ q = '', onSubmit }: Props) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>(q);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/models/?q=${encodeURIComponent(searchQuery)}`);
    if (onSubmit) {
      onSubmit(searchQuery); // For custom behavior
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <Input
        className="w-1/2 p-4 text-xl"
        placeholder="Search models..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
