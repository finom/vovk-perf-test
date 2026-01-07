import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djy")
export default class DjyController {
  @operation({
    summary: "Get Djy",
  })
  @get()
  static getDjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djy",
  })
  @post("{id}")
  static createDjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
