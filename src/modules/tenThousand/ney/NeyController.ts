import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neys")
export default class NeyController {
  @operation({
    summary: "Get Neys",
  })
  @get()
  static getNeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ney",
  })
  @post("{id}")
  static createNey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
