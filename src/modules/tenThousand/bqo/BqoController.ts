import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqo")
export default class BqoController {
  @operation({
    summary: "Get Bqo",
  })
  @get()
  static getBqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqo",
  })
  @post("{id}")
  static createBqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
