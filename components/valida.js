import * as yup from "yup";
const valdations = yup.object().shape({
  email:yup.string().email("Geçerli email giriniz...").required("Zorunlu Alan"),
  password:yup.string().min(8,"En az 8 karakter giriniz...").required("Zorunlu Alan"),
  passwordOnay:yup.string().oneOf([yup.ref('password')],"Yukardaki Parolanızla Eşleşme Sağlanamadı").required("Zorunlu Alan")
})
    
 
  
export default valdations;