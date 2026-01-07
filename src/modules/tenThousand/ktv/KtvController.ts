import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktv")
export default class KtvController {
  @operation({
    summary: "Get Ktv",
  })
  @get()
  static getKtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktv",
  })
  @post("{id}")
  static createKtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
