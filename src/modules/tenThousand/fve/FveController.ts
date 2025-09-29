import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fves")
export default class FveController {
  @operation({
    summary: "Get Fves",
  })
  @get()
  static getFves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fve",
  })
  @post("{id}")
  static createFve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
