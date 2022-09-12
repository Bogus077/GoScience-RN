import { createApi } from '@reduxjs/toolkit/query/react';
import {
  AuthorizationRequest,
  AuthorizationResponse,
  CheckPhoneRequest,
  CheckPhoneResponse,
} from '../models/user/auth';
import { SignUpRequest, SignUpResponse } from '../models/user/signUp';
import { GetUserResponse } from '../models/user/user';
import { rosatomBaseQueryWithReAuth } from '../utils/api/index';

export const GSAPI = createApi({
  reducerPath: 'GS_REDUCER',
  baseQuery: rosatomBaseQueryWithReAuth,
  tagTypes: ['Users', 'User', 'Member', 'Members'],
  keepUnusedDataFor: 30,
  endpoints: (build) => ({
    login: build.mutation<AuthorizationResponse, AuthorizationRequest>({
      query: (credentials) => ({
        url: '/user/signIn',
        method: 'post',
        body: credentials,
      }),
    }),

    checkPhone: build.mutation<CheckPhoneResponse, CheckPhoneRequest>({
      query: (params) => ({
        url: '/user/checkPhone',
        method: 'post',
        body: params,
      }),
    }),

    signUp: build.mutation<SignUpResponse, SignUpRequest>({
      query: (params) => ({
        url: '/user/signUp',
        method: 'post',
        body: params,
      }),
    }),

    getUser: build.query<GetUserResponse, unknown>({
      query: () => ({
        url: '/user/getUser',
      }),
      providesTags: (result) =>
        result ? [{ type: 'User' as const, id: result.id }] : [],
    }),
  }),
});

export const {
  useLoginMutation,
  useCheckPhoneMutation,
  useSignUpMutation,
  useGetUserQuery,
} = GSAPI;
