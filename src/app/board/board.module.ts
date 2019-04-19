import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from '../grid/grid.module';
import {BoardComponent} from './board.component';
import {BarChartGadgetComponent} from "../gadgets/barchart/barchart-gadget.component";
import {PieChartGadgetComponent} from "../gadgets/piechart/piechart-gadget.component";

@NgModule({
    imports: [
        CommonModule,
        GridModule.withComponents([
            BarChartGadgetComponent,
            PieChartGadgetComponent

        ]),
    ],
    providers: [],
    declarations: [
        BoardComponent
    ]
})
export class BoardModule {
}
