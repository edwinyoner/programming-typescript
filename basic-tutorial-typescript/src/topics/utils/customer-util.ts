export interface ICustomer{
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    };
}

export const showCustomerData = (customer: ICustomer) => {
    console.log("********************************");
    console.log("********DATOS DEL CLIENTE*******");
    console.log("********************************");

    console.log("Nombre", customer.name);
    console.log("Apellido", customer.lastName);
    console.log("Correo Electrónico", customer.email);
    
    console.log("*****DIRECCIÓN*****");
    console.log("Dirección", customer.address.description);
    console.log("Ciudad", customer.address.city);
    console.log("País", customer.address.country);

    /*
    console.log("*****CON DESTRUCTURACIÓN*****");
    const {
        name,
        lastName,
        email,
        address: {
            description,
            city,
            country
        }
    } = customer;

    console.log("********************************");
    console.log("********DATOS DEL CLIENTE*******");
    console.log("********************************");

    console.log("Nombre", name);
    console.log("Apellido", lastName);
    console.log("Correo Electrónico", email);
    
    console.log("*****DIRECCIÓN*****");
    console.log("Dirección", description);
    console.log("Ciudad", city);
    console.log("País", country);
     */

    
}