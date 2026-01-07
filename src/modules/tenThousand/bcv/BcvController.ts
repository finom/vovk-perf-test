import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcv")
export default class BcvController {
  @operation({
    summary: "Get Bcv",
  })
  @get()
  static getBcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcv",
  })
  @post("{id}")
  static createBcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
