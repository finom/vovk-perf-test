import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxb")
export default class HxbController {
  @operation({
    summary: "Get Hxb",
  })
  @get()
  static getHxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxb",
  })
  @post("{id}")
  static createHxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
