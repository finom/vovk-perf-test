import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckf")
export default class CkfController {
  @operation({
    summary: "Get Ckf",
  })
  @get()
  static getCkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckf",
  })
  @post("{id}")
  static createCkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
