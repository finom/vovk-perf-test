import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nges")
export default class NgeController {
  @operation({
    summary: "Get Nges",
  })
  @get()
  static getNges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nge",
  })
  @post("{id}")
  static createNge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
