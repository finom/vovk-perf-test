import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djx")
export default class DjxController {
  @operation({
    summary: "Get Djx",
  })
  @get()
  static getDjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djx",
  })
  @post("{id}")
  static createDjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
