import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bso")
export default class BsoController {
  @operation({
    summary: "Get Bso",
  })
  @get()
  static getBso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bso",
  })
  @post("{id}")
  static createBso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
