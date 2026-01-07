import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnz")
export default class LnzController {
  @operation({
    summary: "Get Lnz",
  })
  @get()
  static getLnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnz",
  })
  @post("{id}")
  static createLnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
