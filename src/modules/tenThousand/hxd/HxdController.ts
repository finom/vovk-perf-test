import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxd")
export default class HxdController {
  @operation({
    summary: "Get Hxd",
  })
  @get()
  static getHxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxd",
  })
  @post("{id}")
  static createHxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
