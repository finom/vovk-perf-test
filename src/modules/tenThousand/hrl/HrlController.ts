import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrl")
export default class HrlController {
  @operation({
    summary: "Get Hrl",
  })
  @get()
  static getHrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrl",
  })
  @post("{id}")
  static createHrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
