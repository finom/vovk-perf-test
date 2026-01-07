import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktg")
export default class KtgController {
  @operation({
    summary: "Get Ktg",
  })
  @get()
  static getKtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktg",
  })
  @post("{id}")
  static createKtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
