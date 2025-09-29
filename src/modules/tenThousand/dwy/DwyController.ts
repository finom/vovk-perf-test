import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwies")
export default class DwyController {
  @operation({
    summary: "Get Dwies",
  })
  @get()
  static getDwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwy",
  })
  @post("{id}")
  static createDwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
