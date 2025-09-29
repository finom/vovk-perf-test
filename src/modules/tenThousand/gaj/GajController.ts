import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gajs")
export default class GajController {
  @operation({
    summary: "Get Gajs",
  })
  @get()
  static getGajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaj",
  })
  @post("{id}")
  static createGaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
