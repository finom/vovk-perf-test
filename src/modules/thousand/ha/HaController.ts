import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("has")
export default class HaController {
  @operation({
    summary: "Get Has",
  })
  @get()
  static getHas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ha",
  })
  @post("{id}")
  static createHa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
