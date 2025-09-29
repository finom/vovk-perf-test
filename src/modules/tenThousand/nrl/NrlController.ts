import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrls")
export default class NrlController {
  @operation({
    summary: "Get Nrls",
  })
  @get()
  static getNrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrl",
  })
  @post("{id}")
  static createNrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
