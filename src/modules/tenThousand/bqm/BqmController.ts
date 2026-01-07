import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqm")
export default class BqmController {
  @operation({
    summary: "Get Bqm",
  })
  @get()
  static getBqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqm",
  })
  @post("{id}")
  static createBqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
