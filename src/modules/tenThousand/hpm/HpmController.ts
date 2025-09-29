import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpms")
export default class HpmController {
  @operation({
    summary: "Get Hpms",
  })
  @get()
  static getHpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpm",
  })
  @post("{id}")
  static createHpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
