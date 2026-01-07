import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgc")
export default class BgcController {
  @operation({
    summary: "Get Bgc",
  })
  @get()
  static getBgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgc",
  })
  @post("{id}")
  static createBgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
