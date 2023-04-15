export interface SendRequest {
  phoneNumber: string,
}

export interface SendResponse {
  verificationNumber: string;
}

export interface ConfirmRequest extends SendResponse{

}

export interface ConfirmResponse {
  role: string;
}
