import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fao")
export default class FaoController {
  @operation({
    summary: "Get Fao",
  })
  @get()
  static getFao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fao",
  })
  @post("{id}")
  static createFao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
