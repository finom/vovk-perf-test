import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndds")
export default class NddController {
  @operation({
    summary: "Get Ndds",
  })
  @get()
  static getNdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndd",
  })
  @post("{id}")
  static createNdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
