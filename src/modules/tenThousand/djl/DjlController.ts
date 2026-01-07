import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djl")
export default class DjlController {
  @operation({
    summary: "Get Djl",
  })
  @get()
  static getDjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djl",
  })
  @post("{id}")
  static createDjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
