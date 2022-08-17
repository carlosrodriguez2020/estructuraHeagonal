import { Archieve } from "../domain/Archieve";

export interface ArchivementRepo{
    findAll(): Promise<Archieve[]>
}