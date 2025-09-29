import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goxen")
export default class GoxController {
  @operation({
    summary: "Get Goxen",
  })
  @get()
  static getGoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gox",
  })
  @post("{id}")
  static createGox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
