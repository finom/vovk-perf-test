import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvas")
export default class FvaController {
  @operation({
    summary: "Get Fvas",
  })
  @get()
  static getFvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fva",
  })
  @post("{id}")
  static createFva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
