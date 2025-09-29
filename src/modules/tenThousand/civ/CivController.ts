import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("civs")
export default class CivController {
  @operation({
    summary: "Get Civs",
  })
  @get()
  static getCivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Civ",
  })
  @post("{id}")
  static createCiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
