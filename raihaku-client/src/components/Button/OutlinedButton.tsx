interface OutlinedButtonProps {
  text: string;
  url: string;
  className?: string;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  text,
  url,
  className,
}) => {
  return (
    <div className={`outlined-button ${className || ""}`}>
      <a href={url} target="_blank">
        <button>{text}</button>
      </a>
    </div>
  );
};

export default OutlinedButton;
