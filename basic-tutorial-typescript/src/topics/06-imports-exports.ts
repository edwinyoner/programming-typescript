import { ICustomer, showCustomerData } from './utils/customer-util';

const customer: ICustomer = {
    name: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: {
        description: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

showCustomerData(customer);

export{};