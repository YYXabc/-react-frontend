import Food from './Food';
import Drinks from './Drinks';
import DepartmentStore from './DepartmentStore';
import DomesticAppliancefrom from'./DomesticAppliancefrom';
import Login from './Login';
export default (store) => {
    return [
        {
            component: Food,
            exact: true,
            path:"/"
        },
        {
            component: Drinks,
            path:"/drinks",
            // exact: true,
        },
        {
            path: "/departmentStore",
            component: DepartmentStore
        },
        {
            path: "/domesticAppliancefrom",
            component: DomesticAppliancefrom
        },
        {
            path: "/login",
            component: Login,
            exact: true,
        }
    ]
}