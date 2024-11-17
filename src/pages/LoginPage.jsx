import { Input } from "../components/input/input"
import { Heading } from "../components/heading"

export const LoginPage = () => {
    return (
        <>
        <Heading text="Sign Up"/>
      <form action=''/>
      <Input InputPlaceholder={'Username'} InputType={'text'}/>
      <br/>
      <Input InputPlaceholder={'E-mail'} InputType={'text'}/>
      <br/>
      <Input InputPlaceholder={'Password'} InputType={'password'}/>
        <br />
      <Input InputPlaceholder={'PassportSerie'} InputType={'text'}/>
        <br />
      <Input InputPlaceholder={'Plastic card number'} InputType={'number'}/>
        <br />
      <Input InputPlaceholder={'Phone number'} InputType={'phone'}/>
      <br/>
      <button>Sign Up</button>
        </>
    )
}       