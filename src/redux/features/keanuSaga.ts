import { call, takeEvery, put } from "redux-saga/effects";
import { apolloClient } from "@/lib/apollo-client";
import { KEANU_IMAGE } from "@/lib/graphql-queries";
import { getKeanuPayload, getKeanuSuccess } from "./keanuSlice";
import { ApolloQueryResult } from "@apollo/client";
import { GetKeanuImageQuery } from "@/__generated__/graphql";
import { PayloadAction } from "@reduxjs/toolkit";

function* workGetKeanuFetch(action: PayloadAction<getKeanuPayload>) {
  const keanu: ApolloQueryResult<GetKeanuImageQuery> = yield call(() =>
    apolloClient.query({
      query: KEANU_IMAGE,
      variables: {
        width: action.payload.width,
        height: action.payload.height,
        y: Boolean(action.payload.y),
        g: Boolean(action.payload.g),
      },
    })
  );
  const { keanuImage }: { keanuImage: string } = yield keanu.data;
  yield put(getKeanuSuccess(keanuImage));
}

export default function* keanuSaga() {
  yield takeEvery("keanu/getKeanuFetch", workGetKeanuFetch);
}
