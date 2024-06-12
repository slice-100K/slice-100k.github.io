import { useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface Props {
  inputName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TripleToggle({ inputName, onChange }: Props) {
  const [activeToggle, setActiveToggle] = useState('');
  const { setValue } = useFormContext();

  const handleChange = (value: string) => {
    setValue(inputName, value);
    setActiveToggle(value);
    if (onChange) {
      onChange({
        target: { name: inputName, value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div>
      <Toggle
        variant="secondary"
        pressed={activeToggle === 'false'}
        onPressedChange={() => handleChange('false')}
      >
        False
      </Toggle>
      <Toggle
        variant="secondary"
        pressed={activeToggle === ''}
        onPressedChange={() => handleChange('')}
      >
        Any
      </Toggle>
      <Toggle
        variant="secondary"
        pressed={activeToggle === 'true'}
        onPressedChange={() => handleChange('true')}
      >
        True
      </Toggle>
      <Input name={inputName} type="hidden" value={activeToggle} />
    </div>
  );
}

export default TripleToggle;
