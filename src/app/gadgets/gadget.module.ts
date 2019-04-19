import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormModule} from '../dynamic-form/dynamic-form-module';
import {DndModule} from 'ng2-dnd';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {GadgetSharedModule} from './_common/gadget-shared.module';
import {ErrorHandlerModule} from '../error/error.module';

import {
    MatButtonModule, MatCheckboxModule, MatExpansionModule, MatIconModule, MatInputModule, MatOptionModule,
    MatProgressBarModule, MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DataListModule} from '../datalist/data-list.module';
import {APITokenService} from '../api-token/api-token.service';
import {FacetModule} from '../facet/facet.module';
import {TypeAheadInputModule} from '../typeahead-input/typeahead-input.module';
import {BarChartGadgetComponent} from "./barchart/barchart-gadget.component";
import {BarChartService} from "./barchart/service";
import {PieChartGadgetComponent} from "./piechart/piechart-gadget.component";
import {PieChartService} from "./piechart/service";  // todo gadget




@NgModule({
    imports: [
        CommonModule,
        GadgetSharedModule,
        DndModule.forRoot(),
        DynamicFormModule,
        ErrorHandlerModule,
        NgxChartsModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatOptionModule,
        MatSelectModule,
        FormsModule,
        FacetModule,
        TypeAheadInputModule,
        DataListModule
    ],
    declarations: [
        BarChartGadgetComponent,
        PieChartGadgetComponent

    ],

    providers: [
        BarChartService,
        PieChartService
    ],

    exports: [
        BarChartGadgetComponent,
        PieChartGadgetComponent
    ]
})
export class GadgetModule {
}

