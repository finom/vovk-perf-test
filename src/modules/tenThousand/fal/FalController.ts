import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fals")
export default class FalController {
  @operation({
    summary: "Get Fals",
  })
  @get()
  static getFals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fal",
  })
  @post("{id}")
  static createFal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
