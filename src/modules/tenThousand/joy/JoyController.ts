import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joys")
export default class JoyController {
  @operation({
    summary: "Get Joys",
  })
  @get()
  static getJoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joy",
  })
  @post("{id}")
  static createJoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
