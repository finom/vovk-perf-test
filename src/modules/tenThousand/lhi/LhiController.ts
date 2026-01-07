import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhi")
export default class LhiController {
  @operation({
    summary: "Get Lhi",
  })
  @get()
  static getLhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhi",
  })
  @post("{id}")
  static createLhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
