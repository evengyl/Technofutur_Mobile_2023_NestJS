export enum ErrorMessage{
    USER_NOT_FOUND = "User not found",
    USER_ALREADY_EXIST = "User already exist",
    DUPLICATE_USER = "user not created, duplicate entry",
    ERROR_UNKNOW ="erreur inconnue du system"
}

export enum ErrorStatus{
    USER_NOT_FOUND = 404,
    DUPLICATE_USER = 500,
    USER_ALREADY_EXIST = 500,
    ERROR_UNKNOW = 500

}