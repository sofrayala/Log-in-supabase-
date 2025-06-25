export interface Note {
  id: string;
  title: string;
  description: string | null;
  user_id: string;
  destination: string;
  rating: number;
  start_date: string;
  end_date: string;
}
