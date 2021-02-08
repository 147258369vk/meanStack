import { FormGroup } from '@angular/forms';



export function MustMatch(controlName:string,matchingControlName:string){
  return (formgroup:FormGroup)=>{
    const ps=formgroup.controls[controlName];
    const cps=formgroup.controls[matchingControlName];


    if(cps.errors && !cps.errors.mustMatch)
    return;

    if(ps.value !== cps.value )
    {
      cps.setErrors({mustMatch:true});
    }

    else
    {
      cps.setErrors(null);
    }
  }
}
