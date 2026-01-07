import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxv")
export default class HxvController {
  @operation({
    summary: "Get Hxv",
  })
  @get()
  static getHxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxv",
  })
  @post("{id}")
  static createHxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
