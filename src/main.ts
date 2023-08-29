const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface TrigInterface<T, V> {
    name: string
    data: T
    meta: V
}

const trig: TrigInterface <{meta: string}, string>= {
    name: 'sine',
    data: {
        meta: 'x'
    },
    meta: "boo"
}

// const trig2: TrigInterface<string[]> = {
//     name: 'cosine',
//     data: ['a', 'b', 'c']
// }

// const result = addId<TrigInterface>(trig)
// console.log("result",result)