import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfp")
export default class MfpController {
  @operation({
    summary: "Get Mfp",
  })
  @get()
  static getMfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfp",
  })
  @post("{id}")
  static createMfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
