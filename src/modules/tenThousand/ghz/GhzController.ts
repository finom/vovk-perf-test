import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghzs")
export default class GhzController {
  @operation({
    summary: "Get Ghzs",
  })
  @get()
  static getGhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghz",
  })
  @post("{id}")
  static createGhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
