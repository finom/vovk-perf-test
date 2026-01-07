import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckv")
export default class CkvController {
  @operation({
    summary: "Get Ckv",
  })
  @get()
  static getCkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckv",
  })
  @post("{id}")
  static createCkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
