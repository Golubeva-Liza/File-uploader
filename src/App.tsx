import './App.scss'
import { Layout } from './components/layout'
import { Form, FileUploader } from './components/forms'
import { useForm } from 'react-hook-form'


type FormType = {
    name: string
}

export const App = () => {
    const form = useForm<FormType>({
        mode: 'onTouched',
        // resolver: yupResolver(schema),
    })

    const onSubmit = async (formData: FormType) => {
        console.log(formData)
    }
    
    return (
        <Layout>
            <Form form={form} onSubmit={onSubmit}>
                <FileUploader name='documents' label='Любимый файл' />
            </Form>
        </Layout>
    )
}
