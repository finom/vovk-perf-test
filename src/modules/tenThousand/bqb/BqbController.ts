import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqb")
export default class BqbController {
  @operation({
    summary: "Get Bqb",
  })
  @get()
  static getBqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqb",
  })
  @post("{id}")
  static createBqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
