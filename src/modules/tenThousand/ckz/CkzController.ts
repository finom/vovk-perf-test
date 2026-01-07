import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckz")
export default class CkzController {
  @operation({
    summary: "Get Ckz",
  })
  @get()
  static getCkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckz",
  })
  @post("{id}")
  static createCkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
