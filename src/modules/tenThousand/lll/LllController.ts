import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lll")
export default class LllController {
  @operation({
    summary: "Get Lll",
  })
  @get()
  static getLll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lll",
  })
  @post("{id}")
  static createLll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
