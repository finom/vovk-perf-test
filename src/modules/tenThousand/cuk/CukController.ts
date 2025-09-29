import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuks")
export default class CukController {
  @operation({
    summary: "Get Cuks",
  })
  @get()
  static getCuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuk",
  })
  @post("{id}")
  static createCuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
