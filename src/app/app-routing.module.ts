import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressbarSpinnersComponent } from './progressbar-spinners/progressbar-spinners.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
<<<<<<< HEAD
import { DatatableComponent } from './datatable/datatable.component';
=======
>>>>>>> 96302aaaff4a6a3094bc0e41cdeece081b6b5b59

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressbarSpinnersComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
<<<<<<< HEAD
  { path: 'datatable', component: DatatableComponent },
=======
>>>>>>> 96302aaaff4a6a3094bc0e41cdeece081b6b5b59
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
