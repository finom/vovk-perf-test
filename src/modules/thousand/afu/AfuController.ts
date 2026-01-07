import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afu")
export default class AfuController {
  @operation({
    summary: "Get Afu",
  })
  @get()
  static getAfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afu",
  })
  @post("{id}")
  static createAfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
