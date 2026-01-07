import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfb")
export default class MfbController {
  @operation({
    summary: "Get Mfb",
  })
  @get()
  static getMfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfb",
  })
  @post("{id}")
  static createMfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
