import React, {useState, useCallback} from 'react';
import useLogin from "./useLogin.js";



const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    //const [error, setError] = useState(null);
    //const [load, setLoad] = useState(null);

    const onStart = useCallback(() => {
          setLoad(true);
    },[]);
    const onSuccess = useCallback( (iduser) => {
        setLoad(false);
        setError(false);
        //redireccionar a vista principal
        window.location.href = `/mycompany/${iduser}`;
    }, []);
    const onFailed = useCallback( () => {
        setLoad(false);
        setError(true);
        //redireccionar a vista de error Login
        window.location.href = "/login";
    }, []);



    const login = useLogin({onStartLogin: onStart, onError: onFailed, onSuccess: onSuccess});

    const onSubmit = useCallback( (ev) => {
        ev.preventDefault();
        login(form);
    });



    return (
        <div style={{widht: "30%", marginLeft: "35%", marginRight: "35%", marginTop: 200}}>
            <div className="Icon">
                <span className="glyphicon glyphicon-user"/>
            </div>
            <div className="ContentForm">
                <form name="FormEntrar" onSubmit={onSubmit}>
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon" id="sizing-addon1">
                            <i className="glyphicon glyphicon-envelope"/>
                        </span>
                        <input type="email" className="form-control" name="correo" placeholder="Correo" id="Correo" value={form.email} onChange={({target: {value}}) => setForm({email: value, password: form.password})} aria-describedby="sizing-addon1" required/>
                    </div>
                    <br/>
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon" id="sizing-addon1">
                            <i className="glyphicon glyphicon-lock"/>
                        </span>
                        <input type="password" name="contra" className="form-control" placeholder="******" value={form.password} onChange={({target: {value}}) => setForm({email: form.email, password: value})} aria-describedby="sizing-addon1" required/>
                    </div>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block btn-signin" id="IngresoLog" type="submit">Entrar</button>
                    <div className="opcioncontra"><a href="">Olvidaste tu contraseña?</a></div>
                </form>
            </div>
        </div>
    );
};

export default Login;
