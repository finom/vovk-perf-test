import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuo")
export default class CuoController {
  @operation({
    summary: "Get Cuo",
  })
  @get()
  static getCuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuo",
  })
  @post("{id}")
  static createCuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
