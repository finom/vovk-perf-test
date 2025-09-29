import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kobs")
export default class KobController {
  @operation({
    summary: "Get Kobs",
  })
  @get()
  static getKobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kob",
  })
  @post("{id}")
  static createKob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
