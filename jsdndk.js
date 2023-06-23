 // đăng nhập
 const dnBtn = document.querySelector('.js-dang-nhap')       
 const modal = document.querySelector('.js-modal')
 const modalClose = document.querySelector('.js-modal-close')
 const Btndangnhap = document.querySelector('#dn')
 //




 dnBtn.addEventListener('click', function ShowLgMD(){
    var Ten,Tuoi; 
    Ten = prompt("Bạn hãy nhập vào tên ", ""); 
    Tuoi = prompt("Bạn hãy nhập vào Tuổi : "); 
  
   if(Ten == ""|| Tuoi == "" || Ten == null || Tuoi == null) {
        alert("No Name or No Age");
    }
    else if(parseInt(Tuoi)<18){
        alert("Invalid Age !")
        
    }
    else if(Tuoi.length > 2){
        alert("Invalid Age !")
    }
    else{
        
        alert("Chào bạn : " + Ten );
        alert("Tuổi của bạn là:" + Tuoi)
        show()
    }
    
});

modalClose.addEventListener('click',hide() )
 
 function CheckLogin(){
    
    window.location.href = "detail.html"    

}
 function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Tên không thể để trống");  
      return false;  
    }else if(password.length<6){  
      alert("Mật khẩu phải có ít nhất 6 ký tự");  
      return false;  
      }  
      else {
        CheckLogin();
      }
    }  
 
 function show(){
     modal.classList.add('open')          
     
 }
 
 function hide(){
     modal.classList.remove('open')
 }
//  function thanhcong(){
//      alert('Đăng nhập thành công')
//      modal.classList.remove('open')
     
//  }


//  dnBtn.addEventListener('click',show)
 modalClose.addEventListener('click',hide)
 Btndangnhap.addEventListener('click',validateform)


 // đăng kí
 const dkBtn = document.querySelector('.js-dang-ki')
 const dangki = document.querySelector('.js-dangki')
 const dkClose = document.querySelector('.js-dang-ki-close')
 const Btndangki = document.querySelector('#dk')
 function showdangki(){
     dangki.classList.add('mo')
     
   
     
 }
 function hidedangki(){
     dangki.classList.remove('mo')

  }
  function dangkitc(){
     alert('Đăng nhập thành công')
     dangki.classList.remove('mo')
     
 }
 dkBtn.addEventListener('click',showdangki)
 dkClose.addEventListener('click',hidedangki)
 Btndangki.addEventListener('click',dangkitc)

