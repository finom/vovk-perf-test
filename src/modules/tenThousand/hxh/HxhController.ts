import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxh")
export default class HxhController {
  @operation({
    summary: "Get Hxh",
  })
  @get()
  static getHxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxh",
  })
  @post("{id}")
  static createHxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
