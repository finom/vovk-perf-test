import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfh")
export default class LfhController {
  @operation({
    summary: "Get Lfh",
  })
  @get()
  static getLfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfh",
  })
  @post("{id}")
  static createLfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
