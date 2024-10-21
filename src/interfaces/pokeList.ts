
export interface PokeListProps {
    data: {
        results: {
            name: string;
            url: string;
            index: number;
        }[];
    }
}