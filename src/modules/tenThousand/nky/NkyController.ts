import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkies")
export default class NkyController {
  @operation({
    summary: "Get Nkies",
  })
  @get()
  static getNkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nky",
  })
  @post("{id}")
  static createNky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
