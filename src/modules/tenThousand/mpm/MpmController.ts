import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpms")
export default class MpmController {
  @operation({
    summary: "Get Mpms",
  })
  @get()
  static getMpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpm",
  })
  @post("{id}")
  static createMpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
