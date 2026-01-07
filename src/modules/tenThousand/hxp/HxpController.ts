import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxp")
export default class HxpController {
  @operation({
    summary: "Get Hxp",
  })
  @get()
  static getHxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxp",
  })
  @post("{id}")
  static createHxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
