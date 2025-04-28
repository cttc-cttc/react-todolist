interface Props {
    label: string;
    onClick: () => void;
}

export default function TextButton({ label, onClick }: Props) {
    return (
        <>
            <span className="text-button"
                onClick={onClick}>
                {label}
            </span>
        </>
    );
}