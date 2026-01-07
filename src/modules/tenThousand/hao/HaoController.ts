import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hao")
export default class HaoController {
  @operation({
    summary: "Get Hao",
  })
  @get()
  static getHao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hao",
  })
  @post("{id}")
  static createHao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
