import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evds")
export default class EvdController {
  @operation({
    summary: "Get Evds",
  })
  @get()
  static getEvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evd",
  })
  @post("{id}")
  static createEvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
