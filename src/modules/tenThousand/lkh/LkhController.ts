import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkh")
export default class LkhController {
  @operation({
    summary: "Get Lkh",
  })
  @get()
  static getLkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkh",
  })
  @post("{id}")
  static createLkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
