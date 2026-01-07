import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgz")
export default class BgzController {
  @operation({
    summary: "Get Bgz",
  })
  @get()
  static getBgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgz",
  })
  @post("{id}")
  static createBgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
