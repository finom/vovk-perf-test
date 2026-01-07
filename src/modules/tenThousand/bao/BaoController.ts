import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bao")
export default class BaoController {
  @operation({
    summary: "Get Bao",
  })
  @get()
  static getBao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bao",
  })
  @post("{id}")
  static createBao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
