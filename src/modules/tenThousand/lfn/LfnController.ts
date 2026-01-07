import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfn")
export default class LfnController {
  @operation({
    summary: "Get Lfn",
  })
  @get()
  static getLfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfn",
  })
  @post("{id}")
  static createLfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
