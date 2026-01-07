import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myl")
export default class MylController {
  @operation({
    summary: "Get Myl",
  })
  @get()
  static getMyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myl",
  })
  @post("{id}")
  static createMyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
