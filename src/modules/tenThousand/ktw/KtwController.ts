import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktw")
export default class KtwController {
  @operation({
    summary: "Get Ktw",
  })
  @get()
  static getKtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktw",
  })
  @post("{id}")
  static createKtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
