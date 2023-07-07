import React from 'react'
import './HomePage.css'
import {FcDataProtection} from 'react-icons/fc'
import {useForm} from 'react-hook-form'
function HomePage() {
let {register,handleSubmit,formState:{errors}}=useForm();
function onSubmi(data){
  console.log(data)
  fetch('http://localhost:4000/data',{method:'POST',
body:data.Html})
  .then(res=>res.json())
  .then(dat=>console.log(dat))
  .catch(err=>console.error(err))
}

  return (
    <div className="m-5" id='back'>
    <h1 className='text-center text-warning'>paste your files here</h1>
    <form onSubmit={handleSubmit(onSubmi)}>
    <div className='container d-flex justify-content-around'>
      
    <div className='' id='inpFields'>
      <div  className='w-100'><label className=''><h1>HTML</h1></label></div>
      <input type="file" name='HtmlFile' id='HtmlFile' accept='.html'{...register("Html")}  webkitdirectory/>
    </div>

    <div id='inpFields' className=''>
     <div className=''><label className=''><h1>JavaScript</h1></label></div>
     <div className=''>
      <input className='w-100' type="file" accept='.js, .jsx' name="JsFile" id='JsFile' {...register("javascript")}  webkitdirectory/>
    </div></div>

    <div id='inpFields' >
      <div  className='w-100'>
     <label><h1>CSS</h1></label></div>
      <input type="file" accept='.css' acc name="CssFile" id='CssFile' {...register("Css")}  webkitdirectory/>
    </div>
    
   
  </div>
  
  <div className='text-center'> <button className='btn btn-warning' type='submit'>Submit</button></div>
  
  </form>
  
  
  <div className='d-flex justify-content-center display-3 p-3'>
    <div className=''><FcDataProtection/></div>
    <p className='display-5 pt-3'>Your files are completly secure</p>
  </div>
</div>
  )
}

export default HomePage