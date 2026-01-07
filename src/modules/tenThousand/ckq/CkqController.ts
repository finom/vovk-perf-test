import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckq")
export default class CkqController {
  @operation({
    summary: "Get Ckq",
  })
  @get()
  static getCkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckq",
  })
  @post("{id}")
  static createCkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
