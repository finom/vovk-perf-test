import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgs")
export default class KgController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kg",
  })
  @post("{id}")
  static createKg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
