import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkb")
export default class NkbController {
  @operation({
    summary: "Get Nkb",
  })
  @get()
  static getNkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkb",
  })
  @post("{id}")
  static createNkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
