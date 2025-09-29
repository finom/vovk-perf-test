import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkies")
export default class FkyController {
  @operation({
    summary: "Get Fkies",
  })
  @get()
  static getFkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fky",
  })
  @post("{id}")
  static createFky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
