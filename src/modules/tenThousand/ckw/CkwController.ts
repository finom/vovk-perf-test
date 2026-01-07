import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckw")
export default class CkwController {
  @operation({
    summary: "Get Ckw",
  })
  @get()
  static getCkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckw",
  })
  @post("{id}")
  static createCkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
