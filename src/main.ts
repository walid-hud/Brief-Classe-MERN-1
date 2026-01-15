const $ = <T extends HTMLElement>(selector:string)=> document.querySelector<T>(selector)!
type form_data = {
    fn:string,
    ln:string,
    email:string,
    tel:number,
    reason:string,
    date:string
}
const requests : form_data[] = []


const form = $<HTMLFormElement>("#form")
const last_name = $<HTMLInputElement>("#nom")
const first_name  = $<HTMLInputElement>("#prenom")
const email = $<HTMLInputElement>("#email")
const tel = $<HTMLInputElement>("#telephone")
const reason = $<HTMLInputElement>("#motif")
const date = $<HTMLInputElement>("#date")
const submit_handler = (ev:SubmitEvent)=>{
    const data : form_data = {
        fn:validate(first_name) 
    }
}





function validate(field:HTMLInputElement):boolean{
    if(!field.value && field.value.trim()==="") return false
    return true
}
form.addEventListener("submit" , submit_handler)