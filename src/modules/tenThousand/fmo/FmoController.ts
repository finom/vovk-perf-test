import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmos")
export default class FmoController {
  @operation({
    summary: "Get Fmos",
  })
  @get()
  static getFmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmo",
  })
  @post("{id}")
  static createFmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
