import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedUsersListComponent } from './components/selected-users-list/selected-users-list.component'
import { LayoutComponent } from './components/layout/layout.component'


let routes = [
    {
        path: '',
        component: LayoutComponent 
    },
    {
        path: 'selectedUsers',
        component: SelectedUsersListComponent 
    },
    // {
    //     path: 'home',
    //     component: eLearningHomeComponent 
    // },
    // {
    //     path: 'admin/home',
    //     component: AdminHomeComponent 
    // },
];



@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})

export class layoutRoutesModule{

}