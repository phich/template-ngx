import {NgModule} from '@angular/core';
import {EmailValidator} from './directives/emailValidate.directive';
import {DateValidator} from './directives/dateValidate.directive';
import {EqualValidator} from './directives/equalValidate.directive';
import {EqualToValidator} from './directives/equal-to.directive';
import {NumberValidator} from './directives/numberValidate.directive';

@NgModule({
  declarations: [EmailValidator, DateValidator, EqualValidator, EqualToValidator, NumberValidator],
  exports: [EmailValidator, DateValidator, EqualValidator, EqualToValidator, NumberValidator]
})

export class CustomValidateModule {
}
