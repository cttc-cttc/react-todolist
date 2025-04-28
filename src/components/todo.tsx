import { useEffect } from "react";

interface Props {
    isComplete: boolean;
    value: string;
    onClick: () => void;
    deleteAllCompletedTodo: () => void;
}

export default function ToDo({ isComplete, value, onClick, deleteAllCompletedTodo}: Props) {
    // TODO: 완료된 경우 3초 후에 해당 TODO가 삭제되도록 구현
    // TODO: 클린업까지 같이 구현
    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
              if (deleteAllCompletedTodo) {
                deleteAllCompletedTodo();
              }
              console.log('3초 후 사라짐');
            }, 3000);
            return () => clearTimeout(timer);
        }
      }, [isComplete]);

    return (
        <>
            <div
                className="to-do"
                data-is-complete={isComplete}
                onClick={onClick}
            >
                {/* isComplete이 true일때만 ✔️ 이모티콘 출력 */}
                <p>{isComplete && <span>&#10004;</span>}</p>
                <p>{value}</p>
            </div>
        </>
    );
}