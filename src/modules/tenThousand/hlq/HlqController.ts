import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlq")
export default class HlqController {
  @operation({
    summary: "Get Hlq",
  })
  @get()
  static getHlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlq",
  })
  @post("{id}")
  static createHlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
