import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkz")
export default class LkzController {
  @operation({
    summary: "Get Lkz",
  })
  @get()
  static getLkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkz",
  })
  @post("{id}")
  static createLkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
