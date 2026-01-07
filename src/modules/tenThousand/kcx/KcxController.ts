import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcx")
export default class KcxController {
  @operation({
    summary: "Get Kcx",
  })
  @get()
  static getKcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcx",
  })
  @post("{id}")
  static createKcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
