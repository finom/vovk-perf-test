import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hl")
export default class HlController {
  @operation({
    summary: "Get Hl",
  })
  @get()
  static getHl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hl",
  })
  @post("{id}")
  static createHl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
