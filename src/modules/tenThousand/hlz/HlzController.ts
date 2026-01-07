import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlz")
export default class HlzController {
  @operation({
    summary: "Get Hlz",
  })
  @get()
  static getHlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlz",
  })
  @post("{id}")
  static createHlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
