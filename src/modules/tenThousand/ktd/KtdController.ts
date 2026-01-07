import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktd")
export default class KtdController {
  @operation({
    summary: "Get Ktd",
  })
  @get()
  static getKtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktd",
  })
  @post("{id}")
  static createKtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
