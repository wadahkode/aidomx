export interface AIDOMXComponent {
  name: string
  styles: Record<string, string>
  onClick?: (event: Event) => void
}
