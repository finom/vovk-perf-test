import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckx")
export default class CkxController {
  @operation({
    summary: "Get Ckx",
  })
  @get()
  static getCkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckx",
  })
  @post("{id}")
  static createCkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
