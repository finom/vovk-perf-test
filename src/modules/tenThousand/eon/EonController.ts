import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eons")
export default class EonController {
  @operation({
    summary: "Get Eons",
  })
  @get()
  static getEons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eon",
  })
  @post("{id}")
  static createEon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
