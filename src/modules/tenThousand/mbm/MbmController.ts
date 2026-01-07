import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbm")
export default class MbmController {
  @operation({
    summary: "Get Mbm",
  })
  @get()
  static getMbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbm",
  })
  @post("{id}")
  static createMbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
