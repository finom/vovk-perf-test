import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mky")
export default class MkyController {
  @operation({
    summary: "Get Mky",
  })
  @get()
  static getMky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mky",
  })
  @post("{id}")
  static createMky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
