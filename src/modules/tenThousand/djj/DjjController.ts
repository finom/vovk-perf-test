import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djj")
export default class DjjController {
  @operation({
    summary: "Get Djj",
  })
  @get()
  static getDjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djj",
  })
  @post("{id}")
  static createDjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
