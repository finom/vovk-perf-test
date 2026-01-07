import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fua")
export default class FuaController {
  @operation({
    summary: "Get Fua",
  })
  @get()
  static getFua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fua",
  })
  @post("{id}")
  static createFua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
