import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eses")
export default class EseController {
  @operation({
    summary: "Get Eses",
  })
  @get()
  static getEses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ese",
  })
  @post("{id}")
  static createEse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
