import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkz")
export default class NkzController {
  @operation({
    summary: "Get Nkz",
  })
  @get()
  static getNkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkz",
  })
  @post("{id}")
  static createNkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
