import { useEffect, useState } from 'react';
import { ListItem } from '../../components/ListItem';
import { ICustomer } from '../../types/customer';

import api from '../../services/api';

import { CustomerListContainer } from './styles';
import { Pagination } from '../../components/Pagination';

export function CustomerListContent() {
  const [customerList, setCustomerList] = useState<ICustomer[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function onGetCustomerList() {
      const { data } = await api.get(`?page=${pageNumber}&results=7&seed=abc`);
  
      setCustomerList(data.results);
    }
  
    onGetCustomerList();
  }, [pageNumber]);

  function handleChangePageNumber(page: number) {
    setPageNumber(page)
  }

  return (
    <CustomerListContainer>
      <h1>Customer List</h1>
      <header>
        <p>name</p>
        <p>phone</p>
        <p>e-mail</p>
        <p>state</p>
        <p>country</p>
      </header>
      {customerList.map(customer => (
        <ListItem key={customer.email} customer={customer} />
      ))}
      <Pagination 
        pageNumber={pageNumber}
        handleChangePage={handleChangePageNumber}
      />
    </CustomerListContainer>
  );
}