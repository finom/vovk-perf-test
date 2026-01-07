import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxm")
export default class HxmController {
  @operation({
    summary: "Get Hxm",
  })
  @get()
  static getHxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxm",
  })
  @post("{id}")
  static createHxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
