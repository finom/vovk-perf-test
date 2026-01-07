import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlr")
export default class HlrController {
  @operation({
    summary: "Get Hlr",
  })
  @get()
  static getHlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlr",
  })
  @post("{id}")
  static createHlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
