import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckh")
export default class CkhController {
  @operation({
    summary: "Get Ckh",
  })
  @get()
  static getCkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckh",
  })
  @post("{id}")
  static createCkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
