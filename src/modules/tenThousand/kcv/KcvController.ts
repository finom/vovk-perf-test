import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcv")
export default class KcvController {
  @operation({
    summary: "Get Kcv",
  })
  @get()
  static getKcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcv",
  })
  @post("{id}")
  static createKcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
