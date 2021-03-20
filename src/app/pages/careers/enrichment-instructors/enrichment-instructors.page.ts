import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
​
@Component({
  selector: 'app-enrichment-instructors',
  templateUrl: './enrichment-instructors.page.html',
  styleUrls: ['./enrichment-instructors.page.scss'],
})
export class EnrichmentInstructorsPage implements OnInit, AfterViewInit {
​
  enrichmentInstructorForm: FormGroup;
  validationMessages = {
    firstName: [
      { type: 'required', message: 'Please fill in the required field' }
    ],
    lastName: [
      { type: 'required', message: 'Please fill in the required field' }
    ],
    email: [
      { type: 'required', message: 'Please fill in the required field' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    phone: [
      { type: 'required', message: 'Please fill in the required field' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ]
  };
​
  applyButtonClicked: boolean;
  urButtonClicked: boolean;
  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef) { }
​
  ngOnInit() {
    this.enrichmentInstructorForm = this.formBuilder.group({
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
      linkedIn: new FormControl('', null),
      workExperience: new FormControl('', null),
      workAuthorization: new FormControl('', null)
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
      });

      const dom: HTMLElement = this.elementRef.nativeElement;
      const elements = dom.querySelectorAll('.custom-option');
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < elements.length; i++) {
        const option = elements[i];
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            }
        });
      }

    }, 2000);

    window.addEventListener('click', (e) => {
      const dom: HTMLElement = this.elementRef.nativeElement;
      const elements = dom.querySelectorAll('.custom-select');
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < elements.length; i++){
          if (!elements[i].contains((e as any).target)) {
            elements[i].classList.remove('open');
          }
      }
    });
  }
​
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

  mousedownApply() {
    this.applyButtonClicked = true;
  }

  mouseupApply() {
    this.applyButtonClicked = false;
  }

  mousedownUR() {
    this.urButtonClicked = true;
  }

  mouseupUR() {
    this.urButtonClicked = false;
  }
​
  submit() {
    if (this.enrichmentInstructorForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.enrichmentInstructorForm);
    }
  }
​
}
