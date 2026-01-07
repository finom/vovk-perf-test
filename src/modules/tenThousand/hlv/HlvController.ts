import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlv")
export default class HlvController {
  @operation({
    summary: "Get Hlv",
  })
  @get()
  static getHlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlv",
  })
  @post("{id}")
  static createHlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
