import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlp")
export default class HlpController {
  @operation({
    summary: "Get Hlp",
  })
  @get()
  static getHlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlp",
  })
  @post("{id}")
  static createHlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
