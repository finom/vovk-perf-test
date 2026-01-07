import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djv")
export default class DjvController {
  @operation({
    summary: "Get Djv",
  })
  @get()
  static getDjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djv",
  })
  @post("{id}")
  static createDjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
