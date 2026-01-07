import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfp")
export default class LfpController {
  @operation({
    summary: "Get Lfp",
  })
  @get()
  static getLfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfp",
  })
  @post("{id}")
  static createLfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
