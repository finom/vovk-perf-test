import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nems")
export default class NemController {
  @operation({
    summary: "Get Nems",
  })
  @get()
  static getNems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nem",
  })
  @post("{id}")
  static createNem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
