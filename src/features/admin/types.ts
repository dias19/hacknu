export interface AdminAuthSliceType {
  user: AuthUser| null;
  isLoggedIn: boolean;
  verificationCode: string;
}

export interface AuthUser {
   role: string
  }
