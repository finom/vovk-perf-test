import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfx")
export default class MfxController {
  @operation({
    summary: "Get Mfx",
  })
  @get()
  static getMfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfx",
  })
  @post("{id}")
  static createMfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
