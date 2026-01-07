import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktm")
export default class KtmController {
  @operation({
    summary: "Get Ktm",
  })
  @get()
  static getKtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktm",
  })
  @post("{id}")
  static createKtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
