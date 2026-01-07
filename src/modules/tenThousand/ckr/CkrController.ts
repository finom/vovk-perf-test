import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckr")
export default class CkrController {
  @operation({
    summary: "Get Ckr",
  })
  @get()
  static getCkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckr",
  })
  @post("{id}")
  static createCkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
