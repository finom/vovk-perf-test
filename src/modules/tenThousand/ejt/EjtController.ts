import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejts")
export default class EjtController {
  @operation({
    summary: "Get Ejts",
  })
  @get()
  static getEjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejt",
  })
  @post("{id}")
  static createEjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
