import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecgs")
export default class EcgController {
  @operation({
    summary: "Get Ecgs",
  })
  @get()
  static getEcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecg",
  })
  @post("{id}")
  static createEcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
