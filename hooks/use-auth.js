"use client";

import { createContext, useContext } from "react";

export const AuthContext = createContext({
  account: null,
  loading: true,
  authenticated: false,
  refresh: async () => null,
  login: () => undefined,
  register: () => undefined,
  logout: async () => undefined,
});

export const useAuth = () => useContext(AuthContext);