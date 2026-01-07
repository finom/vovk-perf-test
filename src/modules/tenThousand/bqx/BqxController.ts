import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqx")
export default class BqxController {
  @operation({
    summary: "Get Bqx",
  })
  @get()
  static getBqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqx",
  })
  @post("{id}")
  static createBqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
