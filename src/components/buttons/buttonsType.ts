

export interface buttonsProps {
    state?: () => void;
    className?: string;
    nome?: string;
    tamanhoSelecionado?: string;
    tamanho?: string;
    setTamanhoSelecionado?: React.Dispatch<React.SetStateAction<string>>;
}