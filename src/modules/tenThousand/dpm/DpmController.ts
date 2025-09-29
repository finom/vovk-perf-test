import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpms")
export default class DpmController {
  @operation({
    summary: "Get Dpms",
  })
  @get()
  static getDpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpm",
  })
  @post("{id}")
  static createDpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
