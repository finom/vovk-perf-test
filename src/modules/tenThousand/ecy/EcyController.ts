import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecies")
export default class EcyController {
  @operation({
    summary: "Get Ecies",
  })
  @get()
  static getEcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecy",
  })
  @post("{id}")
  static createEcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
