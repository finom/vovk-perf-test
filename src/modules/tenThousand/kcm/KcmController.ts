import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcm")
export default class KcmController {
  @operation({
    summary: "Get Kcm",
  })
  @get()
  static getKcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcm",
  })
  @post("{id}")
  static createKcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
