import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knms")
export default class KnmController {
  @operation({
    summary: "Get Knms",
  })
  @get()
  static getKnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knm",
  })
  @post("{id}")
  static createKnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
