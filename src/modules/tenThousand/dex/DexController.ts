import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dex")
export default class DexController {
  @operation({
    summary: "Get Dex",
  })
  @get()
  static getDex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dex",
  })
  @post("{id}")
  static createDex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
