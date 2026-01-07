import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkb")
export default class LkbController {
  @operation({
    summary: "Get Lkb",
  })
  @get()
  static getLkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkb",
  })
  @post("{id}")
  static createLkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
