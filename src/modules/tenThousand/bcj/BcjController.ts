import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcj")
export default class BcjController {
  @operation({
    summary: "Get Bcj",
  })
  @get()
  static getBcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcj",
  })
  @post("{id}")
  static createBcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
