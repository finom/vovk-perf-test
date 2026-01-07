import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iap")
export default class IapController {
  @operation({
    summary: "Get Iap",
  })
  @get()
  static getIap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iap",
  })
  @post("{id}")
  static createIap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
