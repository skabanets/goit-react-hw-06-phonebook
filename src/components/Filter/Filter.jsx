import { useDispatch, useSelector } from 'react-redux';
import {
  FilterInput,
  FilterLabel,
  FilterWrpper,
  ResetBtn,
} from './Filter.styled';
import { changeFilter, resetFilter } from '../../redux/phonebook/actions';
import { selectFilter } from '../../redux/phonebook/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterWrpper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterLabel>
      <ResetBtn type="button" onClick={() => dispatch(resetFilter())}>
        Reset
      </ResetBtn>
    </FilterWrpper>
  );
};
