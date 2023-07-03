import './Myform.css'
import { useState } from 'react'


const Myform = ({ user }) => {

    //Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [biografia, setBiografia] = useState('')
    const [role, setRole] = useState('')

    //Criar uma função ao seu gosto. Prefira handleName, por exemplo. Handle significa apontar.
    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o formulário!')
        console.log(name, email, biografia, role)

        //limpar formulário após o envio.
        setName('')
        setEmail('')
        setBiografia('')


    }

    return (
        <div>
            {/* criação de form */}
            <form onSubmit={handleSubmit} className='container' >
                <div>
                    <h1>Formulário</h1>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
                </div> <br />


                {/* Label envolvendo input */}
                <label>
                    <span>Email:</span>
                    {/* Simplificação de manipulação de state */}
                    <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
                </label>
                {/* Textarea */}
                <label>
                    <span>Biografia: </span>
                    <textarea rows="4" cols="22" name="biografia" placeholder='Descrição do usuário' onChange={(e) => setBiografia(e.target.value)} value={biografia} ></textarea><br />
                </label>

                {/* Select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select><br /><br />
                </label>

                <input type="submit" className='submit' value="Enviar" />
            </form>
        </div>
    )
}

export default Myform