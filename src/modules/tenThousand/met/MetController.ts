import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mets")
export default class MetController {
  @operation({
    summary: "Get Mets",
  })
  @get()
  static getMets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Met",
  })
  @post("{id}")
  static createMet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
