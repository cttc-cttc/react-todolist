interface Props {
    label: string;
    onClick: () => void;
}

export default function PrimaryButton({ label, onClick }: Props) {
    return (
        <>
            <button className="primary-button"
                onClick={onClick}>
                {label}
            </button>
        </>
    );
}