import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrd")
export default class LrdController {
  @operation({
    summary: "Get Lrd",
  })
  @get()
  static getLrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrd",
  })
  @post("{id}")
  static createLrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
