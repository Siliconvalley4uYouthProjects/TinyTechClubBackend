import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommunityPartner } from 'src/app/models/communityPartner.model';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.page.html',
  styleUrls: ['./outreach.page.scss'],
})
export class OutreachPage implements OnInit {

  communityPartnerForm: FormGroup;
  private formSubmitAttempt: boolean;
  validationMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    phone: [
      { type: 'required', message: 'Enter a valid phone number' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ],
    message: [
      { type: 'required', message: 'Message is required' }
    ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.communityPartnerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$') // 456-657-1234(this format only is allowed)
      ])),
      companyWebsite: new FormControl('', null),
      message: new FormControl('', Validators.required)
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  submit() {
    if (this.communityPartnerForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.communityPartnerForm);
    }
  }

}
