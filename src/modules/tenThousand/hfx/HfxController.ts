import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfx")
export default class HfxController {
  @operation({
    summary: "Get Hfx",
  })
  @get()
  static getHfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfx",
  })
  @post("{id}")
  static createHfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
