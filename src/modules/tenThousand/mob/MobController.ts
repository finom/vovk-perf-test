import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mob")
export default class MobController {
  @operation({
    summary: "Get Mob",
  })
  @get()
  static getMob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mob",
  })
  @post("{id}")
  static createMob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
