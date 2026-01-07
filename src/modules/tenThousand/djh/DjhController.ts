import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djh")
export default class DjhController {
  @operation({
    summary: "Get Djh",
  })
  @get()
  static getDjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djh",
  })
  @post("{id}")
  static createDjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
