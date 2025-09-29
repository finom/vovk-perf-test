import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddds")
export default class DddController {
  @operation({
    summary: "Get Ddds",
  })
  @get()
  static getDdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddd",
  })
  @post("{id}")
  static createDdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
