import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hud")
export default class HudController {
  @operation({
    summary: "Get Hud",
  })
  @get()
  static getHud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hud",
  })
  @post("{id}")
  static createHud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
