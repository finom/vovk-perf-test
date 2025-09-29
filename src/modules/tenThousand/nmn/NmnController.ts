import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmns")
export default class NmnController {
  @operation({
    summary: "Get Nmns",
  })
  @get()
  static getNmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmn",
  })
  @post("{id}")
  static createNmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
