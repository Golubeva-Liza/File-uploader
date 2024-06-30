import { useState } from 'react'
import { FileUploader as FileDragAndDrop } from 'react-drag-drop-files'

interface Props {}

export const FileUploader = ({}: Props) => {
    const [file, setFile] = useState(null)

    const handleChange = (file: any) => {
        setFile(file)
    }

    return <FileDragAndDrop handleChange={handleChange} name="file" />
}
