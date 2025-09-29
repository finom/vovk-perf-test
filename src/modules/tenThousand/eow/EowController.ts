import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eows")
export default class EowController {
  @operation({
    summary: "Get Eows",
  })
  @get()
  static getEows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eow",
  })
  @post("{id}")
  static createEow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
