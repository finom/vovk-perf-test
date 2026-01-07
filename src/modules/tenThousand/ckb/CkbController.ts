import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckb")
export default class CkbController {
  @operation({
    summary: "Get Ckb",
  })
  @get()
  static getCkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckb",
  })
  @post("{id}")
  static createCkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
