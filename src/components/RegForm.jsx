import { useForm } from 'react-hook-form';


const RegForm = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Registration successful!');
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <label>First Name:</label>
            <input
                type="text"
                {...register('firstName', { required: 'Please enter your first name!' })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className="form-group">
            <label>Last Name:</label>
            <input
                type="text"
                {...register('lastName', { required: 'Please enter your last name!' })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                {...register('email', {
                required: 'Please enter your email!',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email',
                },
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                {...register('password', {
                required: 'Please enter your password!',
                minLength: {
                    value: 5,
                    message: 'Password must be more than 4 characters',
                },
                maxLength: {
                    value: 20,
                    message: 'Password cannot be more than 20 characters',
                },
                })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    );


}

export default RegForm;