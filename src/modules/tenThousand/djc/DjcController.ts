import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djc")
export default class DjcController {
  @operation({
    summary: "Get Djc",
  })
  @get()
  static getDjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djc",
  })
  @post("{id}")
  static createDjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
