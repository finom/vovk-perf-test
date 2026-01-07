import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqw")
export default class BqwController {
  @operation({
    summary: "Get Bqw",
  })
  @get()
  static getBqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqw",
  })
  @post("{id}")
  static createBqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
