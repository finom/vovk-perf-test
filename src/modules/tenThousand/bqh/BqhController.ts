import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqh")
export default class BqhController {
  @operation({
    summary: "Get Bqh",
  })
  @get()
  static getBqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqh",
  })
  @post("{id}")
  static createBqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
