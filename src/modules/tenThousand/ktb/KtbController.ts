import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktb")
export default class KtbController {
  @operation({
    summary: "Get Ktb",
  })
  @get()
  static getKtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktb",
  })
  @post("{id}")
  static createKtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
