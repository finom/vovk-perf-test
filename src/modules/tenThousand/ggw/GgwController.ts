import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggw")
export default class GgwController {
  @operation({
    summary: "Get Ggw",
  })
  @get()
  static getGgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggw",
  })
  @post("{id}")
  static createGgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
