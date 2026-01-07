import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxw")
export default class HxwController {
  @operation({
    summary: "Get Hxw",
  })
  @get()
  static getHxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxw",
  })
  @post("{id}")
  static createHxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
