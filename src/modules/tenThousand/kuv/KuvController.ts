import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuv")
export default class KuvController {
  @operation({
    summary: "Get Kuv",
  })
  @get()
  static getKuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuv",
  })
  @post("{id}")
  static createKuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
