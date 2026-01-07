import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbc")
export default class MbcController {
  @operation({
    summary: "Get Mbc",
  })
  @get()
  static getMbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbc",
  })
  @post("{id}")
  static createMbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
