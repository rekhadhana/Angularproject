import{NgModule} from '@angular/core';
import { DropDownDirective } from '../shared/drop-down.directive';
import { HighlightDirective } from '../Directives/highlight.directive';
import { ZoomDirective } from '../Directives/zoom.directive';
import { MarginDirectiveDirective } from '../Directives/margin-directive.directive';

@NgModule({
    declarations:[ DropDownDirective,
       HighlightDirective,
      ZoomDirective,
    MarginDirectiveDirective],
exports:[DropDownDirective,
    ZoomDirective,
    HighlightDirective,
    MarginDirectiveDirective]
})
  export class sharedModule{

  }
  