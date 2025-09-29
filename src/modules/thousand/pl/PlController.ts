import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pls")
export default class PlController {
  @operation({
    summary: "Get Pls",
  })
  @get()
  static getPls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pl",
  })
  @post("{id}")
  static createPl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
