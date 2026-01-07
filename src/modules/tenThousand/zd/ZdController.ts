import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zd")
export default class ZdController {
  @operation({
    summary: "Get Zd",
  })
  @get()
  static getZd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zd",
  })
  @post("{id}")
  static createZd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
