import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckm")
export default class CkmController {
  @operation({
    summary: "Get Ckm",
  })
  @get()
  static getCkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckm",
  })
  @post("{id}")
  static createCkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
