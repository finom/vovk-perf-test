import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpms")
export default class KpmController {
  @operation({
    summary: "Get Kpms",
  })
  @get()
  static getKpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpm",
  })
  @post("{id}")
  static createKpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
