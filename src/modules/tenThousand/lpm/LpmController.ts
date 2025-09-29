import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpms")
export default class LpmController {
  @operation({
    summary: "Get Lpms",
  })
  @get()
  static getLpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpm",
  })
  @post("{id}")
  static createLpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
