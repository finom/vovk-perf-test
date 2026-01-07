import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cua")
export default class CuaController {
  @operation({
    summary: "Get Cua",
  })
  @get()
  static getCua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cua",
  })
  @post("{id}")
  static createCua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
