import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neps")
export default class NepController {
  @operation({
    summary: "Get Neps",
  })
  @get()
  static getNeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nep",
  })
  @post("{id}")
  static createNep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
