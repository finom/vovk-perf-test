import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrg")
export default class LrgController {
  @operation({
    summary: "Get Lrg",
  })
  @get()
  static getLrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrg",
  })
  @post("{id}")
  static createLrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
