import { USER_ALREADY_EXISTS, USER_NOT_FOUND, WRONG_PASSWORD } from "./messages"
import type { User } from "./models"
import router from "./router"

const STORAGE_KEY = "USERS";
const LOGGED_USER_KEY = "LOGGED_USER";

const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
};

const getUsers = (): Record<string, string> => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
};

const saveUsers = (users: Record<string, string>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const signUp = async (user: User) => {
  const {username, password} = user
  const users = getUsers();

  if (users[username]) {
    throw new Error(USER_ALREADY_EXISTS);
  }

  const hashedPassword = await hashPassword(password);
  users[username] = hashedPassword;
  saveUsers(users);
  router.push('/sign-in')
};

// Fazer login
export const signIn = async (user: User) => {
  const {username, password} = user
  const users = getUsers();

  if (!users[username]) {
    throw new Error(USER_NOT_FOUND);
  }

  const hashedPassword = await hashPassword(password);

  if (users[username] !== hashedPassword) {
    throw new Error(WRONG_PASSWORD);
  }

  await localStorage.setItem(LOGGED_USER_KEY, username);
  router.push({path: '/'})
};

export const logOff = () => {
  localStorage.removeItem(LOGGED_USER_KEY);
  router.push('/sign-in')
};

export const isLogged = (): boolean => {
  return localStorage.getItem(LOGGED_USER_KEY) !== null;
};