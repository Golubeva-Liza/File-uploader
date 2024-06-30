import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormValues = Record<string, any>

interface FormProps<Values extends FormValues> {
    form: UseFormReturn<Values>
    onSubmit: SubmitHandler<Values>
}

export const Form = <Values extends FormValues>({
    form,
    onSubmit,
    children,
}: React.PropsWithChildren<FormProps<Values>>) => {
    return (
        <FormProvider {...form}>
            <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
