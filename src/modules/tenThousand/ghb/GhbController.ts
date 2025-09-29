import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghbs")
export default class GhbController {
  @operation({
    summary: "Get Ghbs",
  })
  @get()
  static getGhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghb",
  })
  @post("{id}")
  static createGhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
