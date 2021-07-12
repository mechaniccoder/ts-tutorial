type Hores = {
  legs: number;
};

type OnlyBoolsAndHoreses = {
  [key: string]: boolean | Hores;
};

const conforms: OnlyBoolsAndHoreses = {
  del: true,
  rodney: false,
};

// mapping type of key
type OptionsFlag<T> = {
  [property in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile(): void;
};

type Featureoptions = OptionsFlag<FeatureFlags>;
const fo: Featureoptions = {
  darkMode: true,
  newUserProfile: false,
};

// prefix
type CreateMutable<T> = {
  -readonly [property in keyof T]: T[property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type Concrete<T> = {
  [Property in keyof T]-?: T[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: string;
};

type User = Concrete<MaybeUser>;

// Key Remapping
type Getters<T> = {
  [Property in keyof T as `get${Capitalize<
    Property & string
  >}`]: () => T[Property];
};

interface Person {
  name: string;
  age: number;
  locations: string;
}

type LazyPerson = Getters<Person>;

//remove property
type RemoveKindField<T> = {
  [Property in keyof T as Exclude<Property, "kind">]: T[Property];
};
interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

export {};
