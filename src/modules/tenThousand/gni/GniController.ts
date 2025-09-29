import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnis")
export default class GniController {
  @operation({
    summary: "Get Gnis",
  })
  @get()
  static getGnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gni",
  })
  @post("{id}")
  static createGni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
