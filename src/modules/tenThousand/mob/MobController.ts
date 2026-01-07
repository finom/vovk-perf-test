import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mob")
export default class MobController {
  @operation({
    summary: "Get Mob",
  })
  @get()
  static getMob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mob",
  })
  @post("{id}")
  static createMob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
