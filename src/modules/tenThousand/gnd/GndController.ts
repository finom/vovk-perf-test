import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnds")
export default class GndController {
  @operation({
    summary: "Get Gnds",
  })
  @get()
  static getGnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnd",
  })
  @post("{id}")
  static createGnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
