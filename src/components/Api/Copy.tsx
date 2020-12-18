type CopyType = {
    id: number
    content: string
}

type CopyGroupType = {
    [key:string]: CopyType
}

const Copy: CopyGroupType = {
    "intro": { "id": 0, "content": "Celebrating the notion of “style for all” and the power of loyalty. H.E.R. has infused her personal street-style twist to the signature TommyXLewis DNA with utility details and pops of neon."}
}

export default Copy