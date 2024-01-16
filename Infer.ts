type __makeOptional<T, K> = 
  Omit<T, __inferType<K, false, keyof T>> 
    & Partial<Pick<T, __inferType<K, false, keyof T>>>;

type __inferType<T, STRCT = false, TYP = unknown> = 
  T extends infer R 
  ? R extends TYP ? R : TYP
  : STRCT extends true ? never 
    : T extends TYP ? T : TYP;
    
type __inferMappedType<R, STRCT> = { 
  [K in keyof R]: 
    R[K] extends infer U
    ? __inferTypeDeep<U, STRCT> 
    : __inferType<R[K]>
}

type __inferTypeDeep<T, STRCT = false, OPTNL = false> =
  T extends infer SHDOW
  ? OPTNL extends true
    ? __makeOptional<__inferMappedType<SHDOW, STRCT>, __inferType<keyof SHDOW, false, keyof SHDOW>>
    : __inferMappedType<SHDOW, STRCT>
  : __inferType<T, STRCT>;


export type InferType<T, STRCT = false, OPTNL = false> = __inferTypeDeep<T, STRCT, OPTNL>;