import { AppConstants } from './../../app.constants';
import { FormGroup } from '@angular/forms';

export class DashBoardParent {
    message: String = "";
    class: String = "";

    save: boolean = false;
    showMessage: boolean = false;
    loading: boolean = true;
    appConstants: AppConstants = new AppConstants();


    edit(form: FormGroup): void {
        this.save = !this.save;
        this.save ? form.enable() : form.disable();
    }

    setMessage(message: String, classMessage: String) {
        this.showMessage = true;
        this.message = message;
        this.class = classMessage;
    }

}