import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htn")
export default class HtnController {
  @operation({
    summary: "Get Htn",
  })
  @get()
  static getHtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htn",
  })
  @post("{id}")
  static createHtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
