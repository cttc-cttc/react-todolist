interface Props {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export default function OutlineInput({ value, placeholder, onChange }: Props) {
    return (
        <>
            <input className="outline-input" type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </>
    );
}