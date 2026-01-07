import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfg")
export default class MfgController {
  @operation({
    summary: "Get Mfg",
  })
  @get()
  static getMfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfg",
  })
  @post("{id}")
  static createMfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
