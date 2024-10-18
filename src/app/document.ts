import { User } from "./User"



export interface Document {

    id: string
    documentname: string
    hash: string
    previousHash: string
    timestamp: string
    //documentMetadata: DocumentMetadata
    user: User

}