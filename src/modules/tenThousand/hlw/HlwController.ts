import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlw")
export default class HlwController {
  @operation({
    summary: "Get Hlw",
  })
  @get()
  static getHlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlw",
  })
  @post("{id}")
  static createHlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
