import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zc")
export default class ZcController {
  @operation({
    summary: "Get Zc",
  })
  @get()
  static getZc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zc",
  })
  @post("{id}")
  static createZc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
