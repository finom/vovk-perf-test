import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqg")
export default class BqgController {
  @operation({
    summary: "Get Bqg",
  })
  @get()
  static getBqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqg",
  })
  @post("{id}")
  static createBqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
