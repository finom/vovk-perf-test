import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktc")
export default class KtcController {
  @operation({
    summary: "Get Ktc",
  })
  @get()
  static getKtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktc",
  })
  @post("{id}")
  static createKtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
