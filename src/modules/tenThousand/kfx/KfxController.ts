import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfx")
export default class KfxController {
  @operation({
    summary: "Get Kfx",
  })
  @get()
  static getKfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfx",
  })
  @post("{id}")
  static createKfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
