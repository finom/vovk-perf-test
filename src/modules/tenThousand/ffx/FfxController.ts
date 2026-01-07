import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffx")
export default class FfxController {
  @operation({
    summary: "Get Ffx",
  })
  @get()
  static getFfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffx",
  })
  @post("{id}")
  static createFfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
