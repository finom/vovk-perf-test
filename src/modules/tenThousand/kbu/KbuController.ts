import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbus")
export default class KbuController {
  @operation({
    summary: "Get Kbus",
  })
  @get()
  static getKbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbu",
  })
  @post("{id}")
  static createKbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
