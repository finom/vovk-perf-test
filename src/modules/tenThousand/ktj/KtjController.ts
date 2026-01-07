import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktj")
export default class KtjController {
  @operation({
    summary: "Get Ktj",
  })
  @get()
  static getKtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktj",
  })
  @post("{id}")
  static createKtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
