import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyvs")
export default class FyvController {
  @operation({
    summary: "Get Fyvs",
  })
  @get()
  static getFyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyv",
  })
  @post("{id}")
  static createFyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
