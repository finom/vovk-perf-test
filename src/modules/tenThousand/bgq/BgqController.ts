import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgq")
export default class BgqController {
  @operation({
    summary: "Get Bgq",
  })
  @get()
  static getBgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgq",
  })
  @post("{id}")
  static createBgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
