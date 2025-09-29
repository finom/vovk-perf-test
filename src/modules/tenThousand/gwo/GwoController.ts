import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwos")
export default class GwoController {
  @operation({
    summary: "Get Gwos",
  })
  @get()
  static getGwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwo",
  })
  @post("{id}")
  static createGwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
