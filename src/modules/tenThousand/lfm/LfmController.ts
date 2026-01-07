import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfm")
export default class LfmController {
  @operation({
    summary: "Get Lfm",
  })
  @get()
  static getLfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfm",
  })
  @post("{id}")
  static createLfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
