import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktf")
export default class KtfController {
  @operation({
    summary: "Get Ktf",
  })
  @get()
  static getKtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktf",
  })
  @post("{id}")
  static createKtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
