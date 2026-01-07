import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efu")
export default class EfuController {
  @operation({
    summary: "Get Efu",
  })
  @get()
  static getEfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efu",
  })
  @post("{id}")
  static createEfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
