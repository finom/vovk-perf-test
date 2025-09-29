import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cees")
export default class CeeController {
  @operation({
    summary: "Get Cees",
  })
  @get()
  static getCees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cee",
  })
  @post("{id}")
  static createCee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
