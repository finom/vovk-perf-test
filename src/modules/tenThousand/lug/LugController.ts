import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lugs")
export default class LugController {
  @operation({
    summary: "Get Lugs",
  })
  @get()
  static getLugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lug",
  })
  @post("{id}")
  static createLug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
