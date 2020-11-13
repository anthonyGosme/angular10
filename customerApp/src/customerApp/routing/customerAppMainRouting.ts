import { homeComponent } from '../home/customerAppHomeComponent';
export const mainRoutes =
[
    {path:'home', component : homeComponent },
    {
        path: 'supplier',
        loadChildren: () => import('../supplier/customerAppSupplierModule').then(m => m.supplierModule)
    }
    ,
    {
        path: 'customer',
        loadChildren: () => import('../customer/customerAppCustomerModule').then(m => m.customerModule)
    }
];
