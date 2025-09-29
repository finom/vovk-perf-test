import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecbs")
export default class EcbController {
  @operation({
    summary: "Get Ecbs",
  })
  @get()
  static getEcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecb",
  })
  @post("{id}")
  static createEcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
