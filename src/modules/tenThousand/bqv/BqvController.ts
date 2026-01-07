import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqv")
export default class BqvController {
  @operation({
    summary: "Get Bqv",
  })
  @get()
  static getBqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqv",
  })
  @post("{id}")
  static createBqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
