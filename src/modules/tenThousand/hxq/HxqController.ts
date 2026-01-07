import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxq")
export default class HxqController {
  @operation({
    summary: "Get Hxq",
  })
  @get()
  static getHxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxq",
  })
  @post("{id}")
  static createHxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
