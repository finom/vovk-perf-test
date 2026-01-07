import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fix")
export default class FixController {
  @operation({
    summary: "Get Fix",
  })
  @get()
  static getFix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fix",
  })
  @post("{id}")
  static createFix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
