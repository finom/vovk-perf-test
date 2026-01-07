import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wm")
export default class WmController {
  @operation({
    summary: "Get Wm",
  })
  @get()
  static getWm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wm",
  })
  @post("{id}")
  static createWm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
