import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_ERROR_REQUEST, REGISTER_REQUEST } from '../../redux/types';
import { NavLink } from 'reactstrap';

const RegisterModal = () => {
    const [modal, setModal] = useState(false)
    const [form, setValue] = useState({
        name: "",
        email: "", 
        password: "",
    })
    const [localMsg, setLocalMsg] = useState('') //메세지를 저장할 usestate
    const {errorMsg} = useSelector((state) => state.auth)

    const dispatch = useDispatch()
   
    const handleToggle = () => {
        dispatch ({
            type: CLEAR_ERROR_REQUEST
        })
        setModal(!modal)
    }

    useEffect(() => {
        try{
            setLocalMsg(errorMsg)
        } catch(e){
            console.error(e)
        }
    }, [errorMsg])
    
    const onChange = (e) => {
        setValue({
            ...form,
            [e.target.name] : e.target.value
        })
    } //인풋의 값을 변화시키고 저장하기위해서 써주는 함수가 되겠다 

    const onSubmit = (e) => {
        e.preventDefault()
        const {name, email, password} = form;
        const newUser = {name, email, password}
        console.log(newUser, "newUser")
        dispatch({
            type: REGISTER_REQUEST,
            payload: newUser
        })
    }
    
        return (
            <div>
              <NavLink onClick={handleToggle} href="#">
                  Register
              </NavLink>    
              <Modal isOpen={modal} toggle={handleToggle}>
                  <ModalHeader toggle={handleToggle}>Register</ModalHeader>
                  <ModalBody>
                  {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
                  <Form onSubmit={onSubmit}>
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={onChange}
                        />
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={onChange}
                        />
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                        <Button color="dark" className="mt-2" block>Register</Button>
                      </FormGroup>
                  </Form>  
                  </ModalBody>

              </Modal>
            </div>
        )
    
}
export default RegisterModal 