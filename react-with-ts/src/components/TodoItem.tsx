import { Todo } from "../types/types";

// interface Props {
//   id: number;
//   content: string;
// }
interface Props extends Todo {
  onClickDelete: (id: number) => void;
}
export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
