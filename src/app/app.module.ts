import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CssPositioningComponent } from './css-positioning/css-positioning.component';
import { AbsolutePosComponent } from './css-positioning/absolute-pos/absolute-pos.component';
import { RelativePosComponent } from './css-positioning/relative-pos/relative-pos.component';
import { StaticInheritComponent } from './css-positioning/static-inherit/static-inherit.component';
import { FloatingComponent } from './css-positioning/floating/floating.component';
import { CenteringComponent } from './css-positioning/centering/centering.component';
import { CssTransitionComponent } from './css-transition/css-transition.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
     RouterModule.forRoot([
      { path: '', component: CssPositioningComponent },
      { path: 'abs', component: AbsolutePosComponent },
      { path: 'rel', component: RelativePosComponent },
      { path: 'stat', component: StaticInheritComponent },
      { path: 'float', component: FloatingComponent },
      { path: 'center', component: CenteringComponent },
      { path: 'trans', component: CssTransitionComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, CssPositioningComponent, AbsolutePosComponent, RelativePosComponent, StaticInheritComponent, FloatingComponent, CenteringComponent, CssTransitionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
