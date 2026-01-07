import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djn")
export default class DjnController {
  @operation({
    summary: "Get Djn",
  })
  @get()
  static getDjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djn",
  })
  @post("{id}")
  static createDjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
