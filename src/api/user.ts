import { httpGET } from "@/utils/request";

interface IUserInfo {
    uid: string;
    nickname?: string;
    age?: string
}

export const requestUserInfo = (uid: string) => httpGET<IUserInfo>(`user_info?uid=${uid}`);
