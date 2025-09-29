import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgps")
export default class LgpController {
  @operation({
    summary: "Get Lgps",
  })
  @get()
  static getLgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgp",
  })
  @post("{id}")
  static createLgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
