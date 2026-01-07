import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dua")
export default class DuaController {
  @operation({
    summary: "Get Dua",
  })
  @get()
  static getDua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dua",
  })
  @post("{id}")
  static createDua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
