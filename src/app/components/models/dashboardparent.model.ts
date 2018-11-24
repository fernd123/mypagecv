import { AppConstants } from './../../app.constants';
import { FormGroup } from '@angular/forms';
import { environment } from './../../../environments/environment.prod';


export class DashBoardParent {
    message: String = "";
    class: String = "";

    save: boolean = false;
    showMessage: boolean = false;
    loading: boolean = true;
    appConstants: AppConstants = new AppConstants();
    isGuest: boolean = environment.isGuest;


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