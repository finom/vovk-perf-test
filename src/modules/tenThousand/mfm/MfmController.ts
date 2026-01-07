import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfm")
export default class MfmController {
  @operation({
    summary: "Get Mfm",
  })
  @get()
  static getMfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfm",
  })
  @post("{id}")
  static createMfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
