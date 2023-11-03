export class Task {
    id: number; // ID task-a, jako bitno za pracenje kroz vreme. Task nikako ne sme da se izgubi.
    title: string;
    description: string;
    assignee: string; // Naziv osobe koja je preuzela da radi na task-u.
}