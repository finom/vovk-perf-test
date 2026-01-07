import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcf")
export default class KcfController {
  @operation({
    summary: "Get Kcf",
  })
  @get()
  static getKcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcf",
  })
  @post("{id}")
  static createKcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
