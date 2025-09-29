import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guys")
export default class GuyController {
  @operation({
    summary: "Get Guys",
  })
  @get()
  static getGuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guy",
  })
  @post("{id}")
  static createGuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
