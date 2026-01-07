import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcb")
export default class KcbController {
  @operation({
    summary: "Get Kcb",
  })
  @get()
  static getKcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcb",
  })
  @post("{id}")
  static createKcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
