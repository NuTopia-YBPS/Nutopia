import { useForm } from "react-hook-form";
import HeadTemplate from "../components/HeadTemplate";
import Layout from "../components/Layout";

const Login = () => {
	const {
		register,
		formState: { errors },
		getValues,
		handleSubmit,
	} = useForm({ mode: "onSubmit", shouldUnregister: true})
	
	const onSubmit = async (data: any) => {
		const response = await fetch('http://192.168.3.91:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {return data})
		.catch(err => console.log(err))

		localStorage.setItem("userToken", response.userToken)
	}

	return (<>
		<HeadTemplate title="NuTopia | Login" description="Login"/>
		<Layout>
			<h1 id="title">Login</h1>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register("user.schoolId", {required: true})}/>
					<input {...register("user.password", {required: true})}/>
					<input type={'submit'} value="Login" />
				</form>
			</div>
		</Layout>
	</>)
}

export default Login