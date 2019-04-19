import {BarChartGadgetComponent} from "../gadgets/barchart/barchart-gadget.component";
import {PieChartGadgetComponent} from "../gadgets/piechart/piechart-gadget.component";

/**
 * Created by jayhamilton on 6/30/17.
 */

export class GadgetFactory {


    /**
     * todo - return new instances  instead of the same instance. This requires the creation of new configuration options.
     * @param gadgetType
     * @returns {any}
     */

    static getComponentType(gadgetType): any {

        switch (gadgetType) {
            case 'BarChartGadgetComponent': // todo gadget
                return BarChartGadgetComponent;
            case 'PieChartGadgetComponent': // todo gadget
                return PieChartGadgetComponent;
            
        }
    }
}
