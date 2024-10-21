
export interface PokeListProps {
    data: {
        results: {
            name: string;
            url: string;
            id: number;
        }[];
    }
}