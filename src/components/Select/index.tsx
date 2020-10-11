import React, { useCallback, useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import {
  OutContainer,
  Container,
  Legend,
  DefaultOption,
  DefaultOptionIcon,
  Options,
  Option,
} from './styles';

interface SelectProps {
  options: string[];
  default: string;
  legend: string;
  getSelected: (option: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  legend,
  default: defaultOption,
  getSelected,
}) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(defaultOption);

  // getSelected = () => current;

  const handleChangeSelected = useCallback(
    option => {
      setCurrent(option);
      getSelected(option);
      setOpen(false);
    },
    [getSelected],
  );

  const handleChangeOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <Legend>{legend}</Legend>
      <Container>
        <DefaultOption onClick={handleChangeOpen}>
          {current}

          <DefaultOptionIcon>
            {open ? <FaCaretUp /> : <FaCaretDown />}
          </DefaultOptionIcon>
        </DefaultOption>
        {open && (
          <>
            <Options>
              {options.map(option => (
                <Option
                  onClick={() => handleChangeSelected(option)}
                  key={option}
                >
                  {option}
                </Option>
              ))}
            </Options>
            <OutContainer onClick={handleChangeOpen} />
          </>
        )}
      </Container>
    </>
  );
};

export default Select;
