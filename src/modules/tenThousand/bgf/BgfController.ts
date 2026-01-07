import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgf")
export default class BgfController {
  @operation({
    summary: "Get Bgf",
  })
  @get()
  static getBgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgf",
  })
  @post("{id}")
  static createBgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
