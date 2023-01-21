
function validate()
{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    if(email.length==0||password.length==0)
        {
            let toast=Toastify({ className:'bg-danger fw-5 border-3 rounded-3',text: "Please Enter fields",duration: 3000,gravity:'bottom',position:'center'})
        
            toast.showToast();
            return ;
        }
    let user=getUser(email);
    if(user == null)
    {   

        let toast=Toastify({ className:'bg-danger fw-5 border-3 rounded-3',text: "Couldn't Find User",duration: 3000,gravity:'bottom',position:'center'})
        
        toast.showToast();
        return ;
    }

}
let signInBtn=document.querySelector("#signIn");
signInBtn.addEventListener('click',()=>validate());