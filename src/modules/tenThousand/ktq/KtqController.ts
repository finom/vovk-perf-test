import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktq")
export default class KtqController {
  @operation({
    summary: "Get Ktq",
  })
  @get()
  static getKtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktq",
  })
  @post("{id}")
  static createKtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
