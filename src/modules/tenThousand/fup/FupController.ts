import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fups")
export default class FupController {
  @operation({
    summary: "Get Fups",
  })
  @get()
  static getFups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fup",
  })
  @post("{id}")
  static createFup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
