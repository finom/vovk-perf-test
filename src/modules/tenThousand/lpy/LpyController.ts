import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpy")
export default class LpyController {
  @operation({
    summary: "Get Lpy",
  })
  @get()
  static getLpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpy",
  })
  @post("{id}")
  static createLpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
