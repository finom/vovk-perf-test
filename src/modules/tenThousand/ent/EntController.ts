import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ents")
export default class EntController {
  @operation({
    summary: "Get Ents",
  })
  @get()
  static getEnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ent",
  })
  @post("{id}")
  static createEnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
