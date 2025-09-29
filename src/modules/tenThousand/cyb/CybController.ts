import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cybs")
export default class CybController {
  @operation({
    summary: "Get Cybs",
  })
  @get()
  static getCybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyb",
  })
  @post("{id}")
  static createCyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
