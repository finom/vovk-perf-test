import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckj")
export default class CkjController {
  @operation({
    summary: "Get Ckj",
  })
  @get()
  static getCkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckj",
  })
  @post("{id}")
  static createCkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
