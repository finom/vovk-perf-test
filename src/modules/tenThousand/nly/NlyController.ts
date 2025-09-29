import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlies")
export default class NlyController {
  @operation({
    summary: "Get Nlies",
  })
  @get()
  static getNlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nly",
  })
  @post("{id}")
  static createNly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
