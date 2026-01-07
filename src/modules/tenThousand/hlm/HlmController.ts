import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlm")
export default class HlmController {
  @operation({
    summary: "Get Hlm",
  })
  @get()
  static getHlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlm",
  })
  @post("{id}")
  static createHlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
