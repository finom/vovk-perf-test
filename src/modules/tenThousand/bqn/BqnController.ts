import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqn")
export default class BqnController {
  @operation({
    summary: "Get Bqn",
  })
  @get()
  static getBqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqn",
  })
  @post("{id}")
  static createBqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
