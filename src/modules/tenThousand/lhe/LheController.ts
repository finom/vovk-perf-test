import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhes")
export default class LheController {
  @operation({
    summary: "Get Lhes",
  })
  @get()
  static getLhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhe",
  })
  @post("{id}")
  static createLhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
