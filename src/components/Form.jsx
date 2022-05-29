 import React , {useState} from 'react';
 
const Form = () => {
    const [form, setForm] = useState({
       //key: value 
        // username: "",
        // email: "",
        // password: "",
        // age: "",
        // isIndian: false,
    }); 
    


    // total has 3 steps here
    //1.mapping input with unique id;
    //2.onChange i am getting unique identifier and the latest value
    //3.updating form where key = unique id and value = new value
    const handleOnChange = (e) => {
        //let{key, value} = e.target
        let { type, name, value, checked , files} = e.target;
       // console.log(type, name, value, checked)
        //console.log(e)
        if (type === "checkbox") {
              setForm({
            ...form,// destructering and spred operator.
            [name]: checked,
              });     
        } else if (type === "file") {
            setForm({
                ...form,
                [name]: files,
           })
        }
        else {
              setForm({
            ...form,// destructering and spred operator.
            [name]: value,
        });
}
 
    };

    // useEffect(() => {
    //     console.log(form);
    // }, [form]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

   return (
     <div>
           Form 
           <form onSubmit={handleOnSubmit}>
               <div>
                   <label>Name:</label>
                   <input type="text"
                       name='username'//key
                       placeholder='Enter Name'
                       value={form.username}
                       onChange={handleOnChange}
                   />
               </div>
                <div>
                   <label>Email:</label>
                   <input type="email"
                       name='email'
                       placeholder='Enter Email'
                       value={form.email}
                       onChange={handleOnChange}
                   />
               </div>
                <div>
                   <label>Password:</label>
                   <input type="password"
                       name='password'
                       value={form.password}
                       placeholder='Enter Password'
                  onChange={handleOnChange} />
               </div>

               
                <div>
                   <label>Age</label>
                   <input type="number"
                       name='age'
                       value={form.age}
                       onChange={handleOnChange}
                   />
               </div>

                <div>
                   <label>City:</label>
                   <select name="city"
                       value={form.city}
                       onChange= {handleOnChange}
                   >
                       <option value="Delhi">Delhi</option>
                       <option value="Bangalure">Bangalue</option>
                       <option value="Pune">Pune</option>
                       <option value="Noida">Noida</option>
                   </select>
              </div>


                <div>
                   <input type="checkbox"
                       name="isIndian"
                       checked={form.isIndian}
                       onChange={handleOnChange}
                   />
                   <label>Is Indian:</label>
               </div>
               <div>
                   <input type="radio"
                       name="gender"
                       value= "Male"
                       onChange={handleOnChange}
                   />
                   <label >Male</label>
                   
                   <input type="radio"
                       name="gender"
                       value="Female"
                       onChange={handleOnChange}
                   />
                   <label >Female</label>
               </div>
                <div>
                   <label>User Resume:</label>
                   <input type="file"
                       name='resume'
                       files={form.resume}
                  onChange={handleOnChange} />
               </div>
               <button type='submit'>Submit</button>
           </form>

     </div>
   );
 }
 
 export default Form;
 