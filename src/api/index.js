import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://tasty-times-testing.herokuapp.com/tasty-times/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('usertoken', localStorage.getItem('auth_token'));
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getData: builder.mutation({
            query: () => ({
                url: 'api',
                method: 'GET'
            })
        }),
        getAddresses: builder.mutation({
            query: () => (
                {
                    url: 'address-list',
                    method: 'GET'
                })
        }),
        updateAddress: builder.mutation({
            query: (data) => ({
                url: 'updte/user/address',
                method: 'PUT',
                data
            })
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: 'user-login',
                method: 'POST',
                body: data
            })
        }),
        userSignUp: builder.mutation({
            query: (data) => ({
                url: 'user-signup',
                method: 'POST',
                body: data
            })
        }),
    })
})

export const { useGetDataMutation, useGetAddressesMutation, useUpdateAddressMutation, useUserLoginMutation , useUserSignUpMutation} = api