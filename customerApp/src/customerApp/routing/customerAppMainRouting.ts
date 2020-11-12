import { customerComponent } from '../customer/customerAppCustomerComponent';
import { homeComponent } from '../home/customerAppHomeComponent';
import { supplierComponent } from '../supplier/customerAppSupplierComponent';

export const mainRoutes =
[
    {path:'home', component : homeComponent },
    {path:'supplier', component : supplierComponent },
    {path:'customer', component : customerComponent },
    {path:'', component : homeComponent }
];
