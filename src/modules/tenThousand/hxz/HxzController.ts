import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxz")
export default class HxzController {
  @operation({
    summary: "Get Hxz",
  })
  @get()
  static getHxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxz",
  })
  @post("{id}")
  static createHxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
