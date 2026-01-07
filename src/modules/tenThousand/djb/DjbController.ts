import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djb")
export default class DjbController {
  @operation({
    summary: "Get Djb",
  })
  @get()
  static getDjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djb",
  })
  @post("{id}")
  static createDjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
