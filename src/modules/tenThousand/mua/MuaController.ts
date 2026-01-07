import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mua")
export default class MuaController {
  @operation({
    summary: "Get Mua",
  })
  @get()
  static getMua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mua",
  })
  @post("{id}")
  static createMua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
