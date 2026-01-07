import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqj")
export default class BqjController {
  @operation({
    summary: "Get Bqj",
  })
  @get()
  static getBqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqj",
  })
  @post("{id}")
  static createBqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
