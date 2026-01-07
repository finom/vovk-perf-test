import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifu")
export default class IfuController {
  @operation({
    summary: "Get Ifu",
  })
  @get()
  static getIfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifu",
  })
  @post("{id}")
  static createIfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
