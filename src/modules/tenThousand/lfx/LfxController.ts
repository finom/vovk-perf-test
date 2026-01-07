import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfx")
export default class LfxController {
  @operation({
    summary: "Get Lfx",
  })
  @get()
  static getLfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfx",
  })
  @post("{id}")
  static createLfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
