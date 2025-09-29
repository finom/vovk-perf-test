import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frks")
export default class FrkController {
  @operation({
    summary: "Get Frks",
  })
  @get()
  static getFrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frk",
  })
  @post("{id}")
  static createFrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
