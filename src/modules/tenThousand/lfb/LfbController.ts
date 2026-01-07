import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfb")
export default class LfbController {
  @operation({
    summary: "Get Lfb",
  })
  @get()
  static getLfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfb",
  })
  @post("{id}")
  static createLfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
