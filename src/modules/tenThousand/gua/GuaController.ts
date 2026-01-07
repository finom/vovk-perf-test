import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gua")
export default class GuaController {
  @operation({
    summary: "Get Gua",
  })
  @get()
  static getGua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gua",
  })
  @post("{id}")
  static createGua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
