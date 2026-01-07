import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxg")
export default class HxgController {
  @operation({
    summary: "Get Hxg",
  })
  @get()
  static getHxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxg",
  })
  @post("{id}")
  static createHxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
