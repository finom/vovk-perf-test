import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fats")
export default class FatController {
  @operation({
    summary: "Get Fats",
  })
  @get()
  static getFats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fat",
  })
  @post("{id}")
  static createFat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
