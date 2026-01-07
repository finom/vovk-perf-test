import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djp")
export default class DjpController {
  @operation({
    summary: "Get Djp",
  })
  @get()
  static getDjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djp",
  })
  @post("{id}")
  static createDjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
