import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktx")
export default class KtxController {
  @operation({
    summary: "Get Ktx",
  })
  @get()
  static getKtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktx",
  })
  @post("{id}")
  static createKtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
