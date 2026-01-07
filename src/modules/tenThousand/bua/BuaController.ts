import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bua")
export default class BuaController {
  @operation({
    summary: "Get Bua",
  })
  @get()
  static getBua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bua",
  })
  @post("{id}")
  static createBua = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
