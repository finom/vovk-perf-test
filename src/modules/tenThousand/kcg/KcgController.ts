import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcg")
export default class KcgController {
  @operation({
    summary: "Get Kcg",
  })
  @get()
  static getKcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcg",
  })
  @post("{id}")
  static createKcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
