import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgv")
export default class BgvController {
  @operation({
    summary: "Get Bgv",
  })
  @get()
  static getBgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgv",
  })
  @post("{id}")
  static createBgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
