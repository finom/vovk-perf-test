import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zg")
export default class ZgController {
  @operation({
    summary: "Get Zg",
  })
  @get()
  static getZg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zg",
  })
  @post("{id}")
  static createZg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
