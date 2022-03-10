import { ICustomer } from '../../types/customer';
import { FiMoreVertical } from 'react-icons/fi';

import {
  ListItemContainer,
} from './styles';

interface IListItem {
  customer: ICustomer;
}

export function ListItem({
  customer
}: IListItem) {
  return (
    <ListItemContainer>
      <span>
        <img src={customer.picture.large} alt="" />
        <p>
          {`${customer.name.first} ${customer.name.last}`}
        </p>
      </span>
      <p>
        {customer.phone}
      </p>
      <p>
        {customer.email}
      </p>
      <p>
        {customer.location.state}
      </p>
      <span>
        <p>
          {customer.location.country}
        </p>
        <FiMoreVertical className='moreIcon' />
      </span>
    </ListItemContainer>
  );
}