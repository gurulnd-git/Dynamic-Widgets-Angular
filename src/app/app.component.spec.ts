import { TestBed, async } from '@angular/core/testing';
import 'rxjs/Rx';

import { DynamicWidgetComponent } from './app.component';
import {RoutingModule} from './routing.module';


describe('DynamicWidgetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicWidgetComponent
      ],
        imports: [
            RoutingModule
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DynamicWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*
  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(DynamicWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(DynamicWidgetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  */
});
