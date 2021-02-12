import React , {useState, useEffect} from 'react';
import { NavLink, Modal,  ModalBody, Alert, Form, FormGroup} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from '../../redux/types';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
 
const LoginModal = () => {
    const [modal, setModal] = useState(false);
    const [localMsg, setLocalMsg] = useState('')
    const [form, setValues] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const {errorMsg} = useSelector((state) => state.auth) 

    useEffect(() => {
        try {
            setLocalMsg(errorMsg)
        } catch(e) {
            console.log(e)
        }
    }, [errorMsg])

    const handleToggle = () => {
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        })
        setModal(!modal)
    }

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {email, password} = form
        const user = {email, password}
        console.log(user)
        dispatch({
            type: LOGIN_REQUEST,
            payload: user
        })
    }

    return (
        <div>
            <NavLink onClick={handleToggle} href="#">
                Login
            </NavLink>
            <Modal show={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Login</ModalHeader>
                <ModalBody>
                    {localMsg ? <Alert>{localMsg}</Alert> : null}
                    {console.log("modal??",modal)}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <label for="email">Email</label>
                            <InputGroup
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={onChange}
                            />
                            <label for="email">Password</label>
                            <InputGroup
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={onChange}
                            />
                            <Button color="dark" style={{marginTop:"2rem"}} block>
                                Login
                            </Button>
                        </FormGroup>
                    </Form>

                </ModalBody>
            </Modal>
        </div>
    )
};

export default LoginModal;