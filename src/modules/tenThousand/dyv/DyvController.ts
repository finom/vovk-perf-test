import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyvs")
export default class DyvController {
  @operation({
    summary: "Get Dyvs",
  })
  @get()
  static getDyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyv",
  })
  @post("{id}")
  static createDyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
