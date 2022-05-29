 import React , {useState, useEffect} from 'react';
 
const Form = () => {
    const [form, setForm] = useState({
       //key: value 
        username: "",
        email: "",
        password: "",
        age: "",
    }); 


    // total has 3 steps here
    //1.mapping input with unique id;
    //2.onChange i am getting unique identifier and the latest value
    //3.updating form where key = unique id and value = new value
    const handleOnChange = (e) => {
        //let{key, value} = e.target
        let { name, value } = e.target;
       // console.log(e)
        setForm({
            ...form,// destructering and spred operator.
            [name]: value,
        });
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

   return (
     <div>
           Form 
           <form>
               <div>
                   <label>Name:</label>
                   <input type="text"
                       name='username'//key
                       placeholder='Enter Name'
                       value={form.name}
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
           </form>
     </div>
   );
 }
 
 export default Form;
 