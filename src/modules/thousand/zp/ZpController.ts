import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zp")
export default class ZpController {
  @operation({
    summary: "Get Zp",
  })
  @get()
  static getZp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zp",
  })
  @post("{id}")
  static createZp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
