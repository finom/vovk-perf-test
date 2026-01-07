import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wu")
export default class WuController {
  @operation({
    summary: "Get Wu",
  })
  @get()
  static getWu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wu",
  })
  @post("{id}")
  static createWu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
