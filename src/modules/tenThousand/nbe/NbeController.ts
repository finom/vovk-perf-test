import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbes")
export default class NbeController {
  @operation({
    summary: "Get Nbes",
  })
  @get()
  static getNbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbe",
  })
  @post("{id}")
  static createNbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
