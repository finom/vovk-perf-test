import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gao")
export default class GaoController {
  @operation({
    summary: "Get Gao",
  })
  @get()
  static getGao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gao",
  })
  @post("{id}")
  static createGao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
