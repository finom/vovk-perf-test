import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfp")
export default class KfpController {
  @operation({
    summary: "Get Kfp",
  })
  @get()
  static getKfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfp",
  })
  @post("{id}")
  static createKfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
