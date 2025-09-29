import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecjs")
export default class EcjController {
  @operation({
    summary: "Get Ecjs",
  })
  @get()
  static getEcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecj",
  })
  @post("{id}")
  static createEcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
