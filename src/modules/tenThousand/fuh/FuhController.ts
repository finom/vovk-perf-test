import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuhs")
export default class FuhController {
  @operation({
    summary: "Get Fuhs",
  })
  @get()
  static getFuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuh",
  })
  @post("{id}")
  static createFuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
