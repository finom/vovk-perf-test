import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djq")
export default class DjqController {
  @operation({
    summary: "Get Djq",
  })
  @get()
  static getDjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djq",
  })
  @post("{id}")
  static createDjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
