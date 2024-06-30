import { Controller, useFormContext } from "react-hook-form"
import { ControlledUploaderProps } from "./types"
import { FileUploader } from "./FileUploader"

export const ControlledFileUploader = ({ name }: ControlledUploaderProps) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
                <FileUploader
                    // {...props}
                    // inputRef={ref}
                    // onChange={onChange}
                    // value={value ?? []}
                    // formError={errorMsg}
                />
            )}
        />
    )
}
