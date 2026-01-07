import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckd")
export default class CkdController {
  @operation({
    summary: "Get Ckd",
  })
  @get()
  static getCkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckd",
  })
  @post("{id}")
  static createCkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
