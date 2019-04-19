import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DynamicWidgetComponent} from './app.component';
import {BoardComponent} from './board/board.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-board',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DynamicWidgetComponent
    },
    {
        path: 'main-board',
        component: BoardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class RoutingModule {
}

