type Option<T> = T | null;
type Maybe<T> = T | null | undefined;

interface Dict<T> {
  [index: string]: T;
}
