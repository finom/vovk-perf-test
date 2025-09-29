import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrds")
export default class NrdController {
  @operation({
    summary: "Get Nrds",
  })
  @get()
  static getNrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrd",
  })
  @post("{id}")
  static createNrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
