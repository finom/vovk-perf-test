import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktl")
export default class KtlController {
  @operation({
    summary: "Get Ktl",
  })
  @get()
  static getKtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktl",
  })
  @post("{id}")
  static createKtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
