import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nps")
export default class NpsController {
  @operation({
    summary: "Get Nps",
  })
  @get()
  static getNps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nps",
  })
  @post("{id}")
  static createNps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
