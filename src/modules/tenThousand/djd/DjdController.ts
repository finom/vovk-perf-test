import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djd")
export default class DjdController {
  @operation({
    summary: "Get Djd",
  })
  @get()
  static getDjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djd",
  })
  @post("{id}")
  static createDjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
