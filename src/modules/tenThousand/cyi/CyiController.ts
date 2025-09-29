import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyis")
export default class CyiController {
  @operation({
    summary: "Get Cyis",
  })
  @get()
  static getCyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyi",
  })
  @post("{id}")
  static createCyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
