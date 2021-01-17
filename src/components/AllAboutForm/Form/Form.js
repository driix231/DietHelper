import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useForm, FormProvider } from 'react-hook-form'

const Form = ({ initialValues, children, onSubmit, btnText }) => {
    const methods = useForm({
        defaultValues: initialValues,
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
                <Button variant="success" type="submit">{btnText}</Button>
            </form>
        </FormProvider>
    )
}

export default Form;