import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laps")
export default class LapController {
  @operation({
    summary: "Get Laps",
  })
  @get()
  static getLaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lap",
  })
  @post("{id}")
  static createLap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
