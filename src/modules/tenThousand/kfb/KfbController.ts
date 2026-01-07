import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfb")
export default class KfbController {
  @operation({
    summary: "Get Kfb",
  })
  @get()
  static getKfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfb",
  })
  @post("{id}")
  static createKfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
