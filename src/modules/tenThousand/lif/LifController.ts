import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lif")
export default class LifController {
  @operation({
    summary: "Get Lif",
  })
  @get()
  static getLif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lif",
  })
  @post("{id}")
  static createLif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
